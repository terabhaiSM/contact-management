# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project
COPY . .

# Set the correct working directory for server
WORKDIR /app/backend

# Expose the application port
EXPOSE 5002

# Start the application
CMD ["node", "server.js"]
