"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const mysql = require('mysql');
const authRoutes = require('../src/routes/authRoutes');
const planRoutes = require('../src/routes/planRoutes');
const userRoutes = require('../src/routes/userRoutes');
const app = express();
const port = 3000;
// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
// Роути
app.use('/auth', authRoutes);
app.use('/plan', planRoutes);
app.use('/user', userRoutes);
// Запуск серверу
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
