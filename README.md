# comp231-S3G2 Angel Invest App

## Setting up a development environment
Use the following link to install react, vs code, node.js and npm within Windows: [Setup React on Windows](https://robinwieruch.de/react-js-windows-setup). Then, install Expo on a Android phone or Expo Client for iOS.

## Front-end

### Setup
Clone this repository using `git clone https://github.com/comp231-S3G2/Angel-Invest`, then go to the Angel-Invest folder using `cd Angel-Invest\angel-invest`  and then run `npm install` to install the Node.js packages.

### Run
Run the front-end using `npm run start`. This will start expo and open a browser tab. From there, click on the "Tunnel" option if the phone is on a different network then the computer. Then scan the QR code in the browser tab using the Expo app on the phone.

## Starting the Back-end

### Setup
Go to the backend folder using `cd backend` from the project root. Then run `npm install` to install the Node.js packages.

#### Setup PostgreSQL
Install Postgres 11.10 from the [downloads page](https://www.enterprisedb.com/downloads/postgres-postgresql-downloads). 
Add Postgres to the path on Windows by typing "Edit the system environment variables" and adding the path to the Path variable (e.g. `C:\Program Files\PostgreSQL\11\bin`). Skip the previous step if on MacOS. Then run powershell and enter `psql -U postgres`, to enter the PostgreSQL REPL. 

##### Create Role
Then create the angelinvestapp role by running `CREATE ROLE angelinvestapp WITH CREATEDB LOGIN PASSWORD 'angelinvest@2020';`, you can then see the roles by running `\du`.

##### Create the Database
Run `CREATE DATABASE angelinvest OWNER angelinvestapp;`. Connect to the database using `\c angelinvest` and add the UUID-OSSP using `CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`

### Run the Unit Test
Run all the unit tests using `npm run test:e2e`.

### Run the Project
Run the project using `npm run start` to start the backend server.

