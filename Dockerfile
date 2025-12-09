# ----------------------------
# Build Stage: For installing dependencies and building assets
# ----------------------------
FROM php:8.4-cli AS build_stage

# Install system dependencies needed for extensions and build tools
RUN apt-get update && apt-get install -y \
    git unzip libpq-dev libzip-dev zip libxml2-dev zlib1g-dev libonig-dev \
    libcurl4-openssl-dev libicu-dev libpng-dev libjpeg-dev libfreetype6-dev \
    curl sudo \
    # Install Node.js & npm for Vite
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install and enable required PHP extensions
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath mbstring gd intl curl

# Set working directory
WORKDIR /var/www/html

# Copy application code and Composer/NPM files
COPY composer.* package.json package-lock.json ./
COPY . .

# Install Composer
COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

# Install Laravel dependencies, ignoring platform requirements to avoid Exit Code 4
# This assumes all required PHP extensions are installed in the Dockerfile
RUN composer clear-cache \
    && composer install --no-dev --optimize-autoloader **--ignore-platform-reqs**

# Install Node dependencies and build Vite assets
RUN npm install \
    && npm run build

# ----------------------------
# Production Stage: Final lightweight image for running the app
# ----------------------------
FROM php:8.4-apache

# Install necessary runtime dependencies (keep this lean)
RUN apt-get update && apt-get install -y \
    libpq-dev libzip-dev libxml2-dev libonig-dev libicu-dev libpng-dev libjpeg-dev libfreetype6-dev \
    # Install Node.js for any runtime needs (optional, but good practice if needed)
    && curl -fsSL https://deb.nodesource.com/setup_20.x | bash - \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install and enable required PHP extensions (must match build stage)
RUN docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo pdo_mysql pdo_pgsql zip bcmath mbstring gd intl curl

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set Apache DocumentRoot to public
RUN sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/sites-available/000-default.conf \
    && sed -i 's|/var/www/html|/var/www/html/public|g' /etc/apache2/apache2.conf

# Set working directory
WORKDIR /var/www/html

# Copy built application files from the build stage
COPY --from=build_stage /var/www/html /var/www/html

# Create folders and set permissions
RUN mkdir -p /var/www/html/public/uploads \
    /var/www/html/public/images \
    && chown -R www-data:www-data /var/www/html \
    && chmod -R 775 /var/www/html/storage /var/www/html/bootstrap/cache \
    && chmod -R 775 /var/www/html/public/uploads /var/www/html/public/images

# ----------------------------
# Expose port and start Apache
# ----------------------------
EXPOSE 10000

CMD ["apache2-foreground"]