# Use official Node.js image from Docker Hub
FROM node:14

# Set working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./
RUN npm install

# Copy the rest of the application
COPY . .

# Expose port the app will run on
EXPOSE 3001

# Run the app
CMD ["node", "index.js"]
