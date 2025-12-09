# ----------------------------
# Base Image: PHP 8.4 + Apache
# ----------------------------
FROM php:8.4-apache

# ----------------------------
# Install system dependencies and PHP extensions
# ----------------------------
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev zip libxml2-dev zlib1g-dev libonig-dev \
    libcurl4-openssl-dev libicu-dev libpng-dev libjpeg-dev libfreetype6-dev \
    curl sudo \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath mbstring gd intl curl \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# ----------------------------
# Enable Apache mod_rewrite
# ----------------------------
RUN a2enmod rewrite

# ----------------------------
# Set Apache DocumentRoot to public
# ----------------------------
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf \
 && sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/apache2.conf

# ----------------------------
# Install Node.js & npm for Vite
# ----------------------------
RUN curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs

# ----------------------------
# Set working directory
# ----------------------------
WORKDIR /var/www/html

# ----------------------------
# Copy application code
# ----------------------------
COPY . /var/www/html/

# ----------------------------
# Create folders and set permissions
# ----------------------------
RUN mkdir -p /var/www/html/public/uploads \
    /var/www/html/public/images \
    && chown -R www-data:www-data /var/www/html/public/uploads \
    && chown -R www-data:www-data /var/www/html/public/images \
    && chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/public/uploads \
    && chmod -R 775 /var/www/html/public/images \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache

# ----------------------------
# Install Composer
# ----------------------------
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# ----------------------------
# Install Laravel dependencies
# ----------------------------
RUN composer clear-cache \
    && composer install --no-dev --optimize-autoloader

# ----------------------------
# Install Node dependencies and build Vite assets
# ----------------------------
RUN npm install \
    && npm run build

# ----------------------------
# Expose port and start Apache
# ----------------------------
EXPOSE 10000

CMD ["apache2-foreground"]
