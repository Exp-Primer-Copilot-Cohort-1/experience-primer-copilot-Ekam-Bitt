// Create web server

const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, world!');
});

server.listen(3000, 'localhost', () => {
  console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
// Create web server with express

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
// Create web server with express and handlebars

const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

// Set handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
// Create web server with express and handlebars and middleware

const express = require('express');
const exphbs = require('express-handlebars');
const serveStatic = require('serve-static');

const app = express();

// Set handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files
app.use(serveStatic('public'));

app.get('/', (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});

// Path: comments.js
// Create web server with express and handlebars and middleware and data

const express = require('express');
const exphbs = require('express-handlebars');
const serveStatic = require('serve-static');

const app = express();

// Set handlebars as the template engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Serve static files
app.use(serveStatic('public'));

// Data
const data = {
  title: 'Hello, world!',
  body: 'This is a page built with Handlebars.',