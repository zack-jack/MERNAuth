# MERN Stack User Authentication Boilerplate

This project is boilerplate for a basic MERN stack user authentication. The express server is authenticated with passport and json web token. The front end is built with React and Redux.

## Getting Started

Clone the repo using the git CLI or via the clone button in the github GUI.

## Prerequisites

You will need to setup a MongoDB database before running the server.<br>
The link to the database is found in server/index.js.<br>
You will also need to set up a keys.js file in server/config to house the JWT secret key.<br>

Run the following command from both the client and server directories:

### `npm install`

This will install all project dependencies locally.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs both the the server and the client app concurrently in development mode.<br>

Server is set to run on port 5000.<br>
Client is set to run on port 3000.<br>

The React client has a proxy to port 5000 for all axios requests to the server.

The server and MongoDB connection will automatically reload if you make edits.<br>
You will also see any errors in the console with morgan.<br>
The React app will also automatically refresh on save of any changes made.

### `npm run server`

Runs just the server on port 5000.

### `npm start`

Runs just the client side of the app on port 3000.
