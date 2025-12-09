# Stage 1 - Build Frontend (Vite)
# Using Node 20 (LTS)
FROM node:20 AS frontend 
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

---

# Stage 2 - Backend (Laravel + PHP + Composer)
# Using PHP 8.4-fpm (Latest stable)
FROM php:8.4-fpm AS backend 

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git curl unzip libpq-dev libonig-dev libzip-dev zip \
    && docker-php-ext-install pdo pdo_mysql mbstring zip

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www

# Copy all application files
COPY . .

# 🚀 THE FIX: Copy built frontend from Stage 1. 
# We assume you set outDir: 'public/dist' in vite.config.js, so the source is /app/public/dist.
COPY --from=frontend /app/public/dist ./public/dist 

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Laravel setup
RUN php artisan config:clear && \
    php artisan route:clear && \
    php artisan view:clear

CMD ["php-fpm"]