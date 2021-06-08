import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';
import paymentsRouter from './routes/payments.js';

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/payments', paymentsRouter);

export default app;
