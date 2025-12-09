<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\MaintenanceRequest;
use Illuminate\Support\Facades\Auth;

class StaffController extends Controller
{
    public function index()
    {
        // Get the logged-in staff user
        $user = Auth::user();
        
        // Get maintenance statistics for this staff
        $maintenanceStats = $this->getMaintenanceStats($user);
        
        // Get recent maintenance activities
        $recentActivities = $this->getRecentActivities($user);
        
        // Get properties assigned to this staff
        $assignedProperties = $this->getAssignedProperties($user);
        
        // Get upcoming maintenance tasks
        $upcomingTasks = $this->getUpcomingTasks($user);
        
        // Get urgent maintenance requests
        $urgentRequests = $this->getUrgentRequests($user);

        // Build a lightweight stats array for the dashboard view
        $maintenanceRequests = MaintenanceRequest::where('assigned_staff_id', $user->user_id)
            ->get()
            ->map(function ($r) {
                $r->days_open = $r->created_at ? now()->diffInDays($r->created_at) : 0;
                return $r;
            });

        $stats = [
            'total_tasks' => $maintenanceRequests->count(),
            'in_progress' => $maintenanceRequests->where('status', 'in_progress')->count(),
            'completed' => $maintenanceRequests->where('status', 'completed')->count(),
            'pending' => $maintenanceRequests->where('status', 'pending')->count(),
            'cancelled' => $maintenanceRequests->where('status', 'cancelled')->count(),
            'high_priority' => $maintenanceRequests->whereIn('priority', ['urgent', 'high'])->count(),
            'urgent' => $maintenanceRequests->where('priority', 'urgent')->count(),
            'total_cost' => 0,
            'avg_days_open' => $maintenanceRequests->where('status', '!=', 'completed')->avg('days_open') ?? 0
        ];

        return view('staff.dashboard', [
            'maintenanceStats' => $maintenanceStats,
            'recentActivities' => $recentActivities,
            'assignedProperties' => $assignedProperties,
            'upcomingTasks' => $upcomingTasks,
            'urgentRequests' => $urgentRequests,
            'user' => $user,
            'maintenanceRequests' => $maintenanceRequests,
            'stats' => $stats,
        ]);
    }

    private function getMaintenanceStats($user)
    {
        $totalAssigned = MaintenanceRequest::where('assigned_staff_id', $user->user_id)->count();
        $inProgress = MaintenanceRequest::where('assigned_staff_id', $user->user_id)
            ->where('status', 'in_progress')
            ->count();
        $completedThisMonth = MaintenanceRequest::where('assigned_staff_id', $user->user_id)
            ->where('status', 'completed')
            ->whereMonth('completed_at', now()->month)
            ->count();
        $urgentPending = MaintenanceRequest::where('assigned_staff_id', $user->user_id)
            ->whereIn('priority', ['urgent', 'high'])
            ->where('status', '!=', 'completed')
            ->count();
        
        // Calculate overall completion rate (Completed Ever / Total Assigned Ever)
        $completedTotal = MaintenanceRequest::where('assigned_staff_id', $user->user_id)
            ->where('status', 'completed')
            ->count();

        $completionRate = $totalAssigned > 0 
            ? round(($completedTotal / $totalAssigned) * 100, 1)
            : 0;
        
        return [
            'total_assigned' => $totalAssigned,
            'in_progress' => $inProgress,
            'completed_this_month' => $completedThisMonth,
            'urgent_pending' => $urgentPending,
            'completion_rate' => $completionRate // Now represents overall rate
        ];
    }

    private function getRecentActivities($user)
    {
        return MaintenanceRequest::with(['unit.property', 'user'])
            ->where('assigned_staff_id', $user->user_id)
            ->orderBy('updated_at', 'desc')
            ->limit(5)
            ->get()
            ->map(function ($request) {
                // Use combined visual helper
                $visuals = $this->getRequestVisuals($request->status, $request->priority);

                return [
                    'id' => $request->request_id,
                    'title' => $request->title,
                    'property' => optional(optional($request->unit)->property)->property_name ?? 'Unknown',
                    'unit' => optional($request->unit)->unit_num ?? 'N/A',
                    'status' => $request->status,
                    'priority' => $request->priority,
                    'updated_at' => $request->updated_at,
                    'icon' => $visuals['icon'],
                    'icon_color' => $visuals['color']
                ];
            });
    }

    private function getAssignedProperties($user)
    {
        // Get unique properties from assigned maintenance requests
        return MaintenanceRequest::with('unit.property')
            ->where('assigned_staff_id', $user->user_id)
            ->whereIn('status', ['in_progress', 'pending'])
            ->get()
            ->groupBy(function ($request) {
                return optional(optional($request->unit)->property)->property_id ?? 'unknown';
            })
            ->map(function ($requests) {
                $property = optional($requests->first()->unit)->property;
                if (!$property) return null;
                
                return [
                    'property_id' => $property->property_id,
                    'property_name' => $property->property_name,
                    'address' => $property->property_address,
                    'active_requests' => $requests->count(),
                    'urgent_requests' => $requests->whereIn('priority', ['urgent', 'high'])->count()
                ];
            })
            ->filter()
            ->values()
            ->take(3);
    }

    /**
     * Retrieves upcoming tasks ordered by submission date (oldest first).
     */
    private function getUpcomingTasks($user)
    {
        return MaintenanceRequest::with(['unit.property', 'user'])
            ->where('assigned_staff_id', $user->user_id)
            ->where('status', 'in_progress')
            ->orderBy('created_at', 'asc') // FIX: Changed requested_at to created_at
            ->limit(3)
            ->get()
            ->map(function ($request) {
                // Return a clean array instead of mutating the model
                return [
                    'id' => $request->request_id,
                    'title' => $request->title,
                    'days_open' => now()->diffInDays($request->created_at), // FIX: Changed requested_at to created_at
                    'priority' => $request->priority,
                    'property_name' => optional(optional($request->unit)->property)->property_name ?? 'Unknown',
                    'unit_number' => optional($request->unit)->unit_num ?? 'N/A',
                    'tenant_name' => optional($request->user)->first_name . ' ' . optional($request->user)->last_name,
                ];
            });
    }

    /**
     * Retrieves urgent requests, ordered by priority, then submission date (oldest first).
     */
    private function getUrgentRequests($user)
    {
        return MaintenanceRequest::with(['unit.property', 'user'])
            ->where('assigned_staff_id', $user->user_id)
            ->whereIn('priority', ['urgent', 'high'])
            ->where('status', '!=', 'completed')
            ->orderByRaw("FIELD(priority, 'urgent', 'high')") // Ensures Urgent is first
            ->orderBy('created_at', 'asc') // FIX: Changed requested_at to created_at
            ->limit(3)
            ->get()
            ->map(function ($request) {
                // Return a clean array instead of mutating the model
                return [
                    'id' => $request->request_id,
                    'title' => $request->title,
                    'priority' => $request->priority,
                    'days_open' => now()->diffInDays($request->created_at), // FIX: Changed requested_at to created_at
                    'property_name' => optional(optional($request->unit)->property)->property_name ?? 'Unknown',
                    'unit_number' => optional($request->unit)->unit_num ?? 'N/A',
                ];
            });
    }

    /**
     * Combined helper for getting icon and color based on status and priority.
     */
    private function getRequestVisuals($status, $priority)
    {
        $visuals = [
            'urgent' => ['icon' => 'fas fa-exclamation-triangle', 'color' => 'red'],
            'high' => ['icon' => 'fas fa-exclamation-circle', 'color' => 'orange'],
            'completed' => ['icon' => 'fas fa-check-circle', 'color' => 'green'],
            'in_progress' => ['icon' => 'fas fa-tools', 'color' => 'blue'],
            'default' => ['icon' => 'fas fa-clock', 'color' => 'yellow'],
        ];

        // Priority overrides status
        if ($priority === 'urgent') {
            return $visuals['urgent'];
        } elseif ($priority === 'high') {
            return $visuals['high'];
        } elseif (isset($visuals[$status])) {
            return $visuals[$status];
        } else {
            return $visuals['default'];
        }
    }

    // --- Main Maintenance View Method ---

    public function maintenance()
    {
        // Get the logged-in user
        $user = Auth::user();

        $maintenanceRequests = MaintenanceRequest::with([
                'unit.property',
                'user',
                'assignedStaff', 
            ])
            ->where('assigned_staff_id', $user->user_id)
            ->orderByRaw("
                CASE 
                    WHEN status = 'in_progress' THEN 1
                    WHEN status = 'pending' THEN 2
                    WHEN status = 'completed' THEN 3
                    WHEN status = 'cancelled' THEN 4
                    ELSE 5
                END
            ")
            ->orderByRaw("FIELD(priority, 'urgent', 'high', 'medium', 'low')")
            ->orderBy('created_at', 'desc')
            ->get()
            ->map(function ($request) {
                // Calculate days open (always calculate it)
                $request->days_open = $request->created_at ? now()->diffInDays($request->created_at) : 0; // FIX: Changed requested_at to created_at
                $request->property_name = optional(optional($request->unit)->property)->property_name ?? 'Unknown Property';
                $request->unit_number = optional($request->unit)->unit_num ?? 'N/A';
                
                // Get assigned staff name
                $request->assigned_staff_name = optional($request->assignedStaff)->first_name . ' ' . optional($request->assignedStaff)->last_name;
                
                // Get tenant name (from user relationship)
                $request->tenant_name = optional($request->user)->first_name . ' ' . optional($request->user)->last_name;
                
                // Get completion date if exists - safely handle null
                $request->completion_date = $request->completed_at ? $request->completed_at->format('M d, Y') : null;
                
                return $request;
            });
        
        // Calculate statistics
        $stats = [
            'total_tasks' => $maintenanceRequests->count(),
            'in_progress' => $maintenanceRequests->where('status', 'in_progress')->count(),
            'completed' => $maintenanceRequests->where('status', 'completed')->count(),
            'pending' => $maintenanceRequests->where('status', 'pending')->count(),
            'cancelled' => $maintenanceRequests->where('status', 'cancelled')->count(),
            'high_priority' => $maintenanceRequests->whereIn('priority', ['urgent', 'high'])->count(),
            'urgent' => $maintenanceRequests->where('priority', 'urgent')->count(),
            'total_cost' => 0,
            // Calculate avg days open only for tasks not yet completed
            'avg_days_open' => $maintenanceRequests->where('status', '!=', 'completed')->avg('days_open') ?? 0
        ];
        
        return view('staff.maintenance', [
            'maintenanceRequests' => $maintenanceRequests,
            'stats' => $stats
        ]);
    }

    public function updateStatus(Request $request, $id)
    {
        $validated = $request->validate([
            'status' => 'required|in:pending,in_progress,completed,cancelled',
            'completion_notes' => 'nullable|string|max:1000'
        ]);
        
        $maintenanceRequest = MaintenanceRequest::findOrFail($id);
        
        // Check if the user is assigned to this request
        if ($maintenanceRequest->assigned_staff_id != Auth::id()) {
            return back()->with('error', 'You are not assigned to this maintenance request.');
        }
        
        // Update status
        $maintenanceRequest->status = $validated['status'];
        
        // If completing, set completed_at
        if ($validated['status'] == 'completed') {
            $maintenanceRequest->completed_at = now();
        }
        
        // If moving from completed to another status, clear completed_at
        if ($maintenanceRequest->getOriginal('status') == 'completed' && $validated['status'] != 'completed') {
            $maintenanceRequest->completed_at = null;
        }
        
        // Save completion notes if provided
        if (isset($validated['completion_notes'])) {
            $maintenanceRequest->completion_notes = $validated['completion_notes'];
        }
        
        $maintenanceRequest->save();
        
        return back()->with('success', 'Maintenance request status updated successfully.');
    }
}