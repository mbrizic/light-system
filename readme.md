# LIGHT SYSTEM

## About the project

Web app for remote control of a home lighting system. Originally planned to be connected to DALI-compliant setups, but for now that part is mocked with a database. 

## Setup
This is how to install and setup everything needed to run Light System web app locally 

### 0. Requirements

1. Install PostgreSQL database management system
	- https://www.postgresql.org/download/
2. Install NodeJS runtime
	- https://nodejs.org/en/download/

### 1. Setting up the database

1. Configure PostgreSQL user. By default, the app will work if there's user called `postgres` with password `postgres`. If it's not, you're gonna have to change the connection string located in `/backend/config.js` file with the correct credentials.

2. Create a database. Default connection string expects a database called `lightSystem`, but this is also configurable through config.js file.

### 2. Setting up the NodeJS app

1. Install following NPM packages globally by running these commands:
	```
	npm install -g express
	npm install -g supervisor
	npm install -g bower
	```
3. Install all backend dependencies:
	```
	npm install
	```
4. Install all frontend dependencies:
	```
	bower install
	```
5. Start web server. It's set up to run on port 80, which might require elevated privileges. 
	```
	npm start
	```
6. Open localhost in browser


### 3. Setting up the system to be accessible on other devices on the network

Optional - only if you plan on deploying the app on local network.

1. Configure firewall to allow incoming connections from devices on the same network. 

2. If the NodeJS server is running the app on port 80, the other devices on the network can access the app by simply visiting the server machine's IP address from a browser. Otherwise, you need to specify the port you selected.



