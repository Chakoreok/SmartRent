# Stage 1 - Build Frontend (Vite)
# 🎯 Upgrade to Node 20 (LTS) or Node 22 (LTS) for current support
FROM node:20 AS frontend 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2 - Backend (Laravel + PHP + Composer)
# 🎯 PHP 8.4 is the latest stable, which is great for new projects
FROM php:8.4-fpm AS backend 

# Install system dependencies (No change needed)
RUN apt-get update && apt-get install -y \
    git curl unzip libpq-dev libonig-dev libzip-dev zip \
    && docker-php-ext-install pdo pdo_mysql mbstring zip

# Install Composer (No change needed - 'composer:2' is the correct tag)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy app files (No change needed)
COPY . .

# 🛑 IMPORTANT FIX: This path depends on your vite.config.js output. 
# Assuming you did NOT change vite.config.js, the path is /app/dist (default for Vite):
COPY --from=frontend /app/dist ./public/dist 
# If you DID change vite.config.js to output to 'public/dist', use:
# COPY --from=frontend /app/public/dist ./public/dist

# Install PHP dependencies (No change needed)
RUN composer install --no-dev --optimize-autoloader

# Laravel setup (No change needed)
RUN php artisan config:clear && \
    php artisan route:clear && \
    php artisan view:clear

CMD ["php-fpm"]