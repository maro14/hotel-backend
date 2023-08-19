# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and yarn.lock to the working directory
COPY package*.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the application files to the working directory
COPY . .

# Expose the port your Express app is listening on
EXPOSE 5000

# Define the command to run your app
CMD ["yarn", "start"]