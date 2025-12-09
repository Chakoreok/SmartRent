# =================================================================
# Stage 1: Frontend Build (Builds Vite assets with Node)
# =================================================================
FROM node:20 AS frontend
WORKDIR /app
COPY package*.json ./

# Install only necessary Node dependencies
RUN npm install

# Copy application files needed for the frontend build
COPY . .

# Run the Vite build, which creates public/dist
RUN npm run build 

# =================================================================
# Stage 2: Backend/Runtime (PHP + Apache)
# =================================================================
# Start with the lean PHP 8.4-apache base
FROM php:8.4-apache AS backend

# 1. Install System Dependencies (Laravel/Git)
# We only install system dependencies required by PHP extensions, not Node.
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev zip libxml2-dev zlib1g-dev libonig-dev \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath mbstring

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set Apache DocumentRoot to /var/www/html/public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf \
    && sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/apache2.conf

# Copy app code
COPY . /var/www/html/

# Set working dir
WORKDIR /var/www/html

# 2. Install Composer (Only installed once)
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# 3. ⭐️ COPY BUILT ASSETS (From Stage 1) ⭐️
# This copies ONLY the compiled files and the manifest.json
COPY --from=frontend /app/public/dist /var/www/html/public/dist

# Create uploads folder and set permissions
RUN mkdir -p /var/www/html/public/uploads \
    && chown -R www-data:www-data /var/www/html/public/uploads \
    && chmod -R 775 /var/www/html/public/uploads

# Set final permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 10000

CMD ["apache2-foreground"]