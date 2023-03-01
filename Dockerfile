FROM nginx:stable-alpine
COPY dist /usr/share/nginx/html

COPY nginx/nginx.conf /etc/nginx/nginx.conf
CMD ["nginx"]
