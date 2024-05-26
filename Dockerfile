# Use the specific Node.js version from the Docker Hub
FROM node:alpine

# Set the working directory in the Docker container
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json (if available)
COPY package*.json .

# Install dependencies in the container
RUN npm ci --legacy-peer-deps

RUN npm install -g nodemon

# Install Prisma CLI globally
RUN npm install -g prisma

# Copy the rest of your application code
COPY . .

# Generate the Prisma client
RUN prisma generate && echo "Prisma client generated successfully"

# Expose the port your app runs on
# EXPOSE 3002

# Command to run your app using nodemon
CMD ["nodemon", "index.js"]
