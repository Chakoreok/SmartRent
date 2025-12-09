import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
    plugins: [
        laravel({
            // 🚀 FIX: Add the missing JavaScript file to the input array
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/js/register.js", // <--- ADDED THIS LINE
            ],
            refresh: true,
        }),
        tailwindcss(),
    ],
    build: {
        // Output compiled assets to 'public/dist' folder
        outDir: "public/dist",
        emptyOutDir: true,
    },
});
