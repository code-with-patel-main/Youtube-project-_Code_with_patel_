# Use the official PHP Apache image
FROM php:8.2-apache

# Set the working directory
WORKDIR /srv

# Copy your PHP files into the container
COPY . .

# Expose the port (optional, as Apache defaults to 80)
EXPOSE 80

# Ensure Apache runs in the foreground
CMD ["apache2-foreground"]
