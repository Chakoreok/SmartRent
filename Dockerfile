# Use PHP 8.4 (required by your composer.lock)
FROM php:8.4-apache

# Install required PHP extensions for Laravel
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

# Create uploads folder and set permissions
RUN mkdir -p /var/www/html/public/uploads \
  && chown -R www-data:www-data /var/www/html/public/uploads \
  && chmod -R 775 /var/www/html/public/uploads

# Set working dir
WORKDIR /var/www/html

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

EXPOSE 10000

CMD ["apache2-foreground"]
