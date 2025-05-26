# Use official n8n image
FROM n8nio/n8n

# (Optional) Set environment variables directly here or use Render dashboard instead
ENV N8N_BASIC_AUTH_ACTIVE=true
ENV N8N_BASIC_AUTH_USER=admin
ENV N8N_BASIC_AUTH_PASSWORD=lead@123
ENV N8N_HOST=0.0.0.0
ENV N8N_PORT=5678
ENV N8N_PROTOCOL=http

# Expose the default n8n port
EXPOSE 5678

# Run n8n
CMD ["n8n"]






