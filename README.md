<h1 align="center">Rent Book App - Simple App RESTfull API</h1>

Rent App is a simple rent application specially for backend only. Built with NodeJs using the ExpressJs Framework.
Express.js is a web application framework for Node.js. [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.10.16-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
4. Create a database with the name simple-rest, and Import file [survey_system.sql](survey_system.sql) to **phpmyadmin**
5. Type `npm run dev` or `npm start` to run the server
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:5000/notes)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
PORT=5000
HOST=localhost
USER=root // default
PASS= // default
DATABASE=survey_system
```

## Documentation

**1. POSTMAN_LINK**

- <a href="https://www.getpostman.com/collections/65aad291c9b780ba9c72">Postman</a>

**2. POSTMAN_IMPORT_FILE**

- Import postman collection json from the project directory to the postman app
  **3. DOCUMENTATION.REST**
- Install rest client extention from vs code then open documentation.rest file and then send request from inside the file

**4. DELETE**

- `/book/:id` (Delete book by id)
- `/genre/:id` (Delete genre by id)
