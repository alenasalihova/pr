const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');

const planRoutes = require('../src/routes/planRoutes');


const app = express();
const port = 3000;

// Підключення до MySQL бази даних
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'learning_app'
});

db.connect((err:any) => {
  if (err) throw err;
  console.log('Connected to the database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Роути
app.use('/plan', planRoutes);

// Запуск серверу
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});