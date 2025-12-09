# Use PHP 8.4 (required by your composer.lock)
# Start with a base that includes both PHP and Apache
FROM php:8.4-apache

# 1. Install System Dependencies (PHP/Laravel/Git)
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev zip libxml2-dev zlib1g-dev libonig-dev \
    # Add Node/NPM dependencies for the frontend build
    curl gnupg \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath mbstring

# 2. Install Node.js (Required for Vite/npm)
# Install a stable Node.js version (e.g., 20 LTS)
RUN curl -sL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set Apache DocumentRoot to /var/www/html/public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf \
    && sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/apache2.conf

# Copy app code
COPY . /var/www/html/

# Set working dir
WORKDIR /var/www/html

# 3. Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# 4. 🔥 BUILD FRONTEND ASSETS (THE MISSING STEP) 🔥
# Install NPM dependencies
RUN npm install
# Run the Vite build command to generate assets in public/dist
RUN npm run build 

# Create uploads folder and set permissions
RUN mkdir -p /var/www/html/public/uploads \
    && chown -R www-data:www-data /var/www/html/public/uploads \
    && chmod -R 775 /var/www/html/public/uploads

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 10000

CMD ["apache2-foreground"]