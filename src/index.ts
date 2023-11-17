import express from 'express';
import session from 'express-session';
// import mysql from 'mysql';
import authRouter from '../src/routes/authRoutes';
import planRoutes from '../src/routes/planRoutes';
import userRoutes from '../src/routes/userRoutes';

const app = express();
const port = 3000;

// Підключення до MySQL бази даних
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'learning_app'
// });

// db.connect((err:any) => {
//   if (err) throw err;
//   console.log('Connected to the database');
// });

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));

// Роути
app.use('/auth', authRouter);
app.use('/plan', planRoutes);
app.use('/user', userRoutes);

// Запуск серверу
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
