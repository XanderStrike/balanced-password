# Use multi-arch nginx image as base
FROM --platform=$TARGETPLATFORM nginx:alpine

# Copy the application files to nginx's default serving directory
COPY index.html /usr/share/nginx/html/
COPY script.js /usr/share/nginx/html/

# Nginx runs on port 80 by default
EXPOSE 80

# Use the default nginx command
CMD ["nginx", "-g", "daemon off;"] 