import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import history from 'connect-history-api-fallback';
import serveStatic from 'serve-static';

import productsRouter from './routes/products.js';
import usersRouter from './routes/users.js';
import paymentsRouter from './routes/payments.js';
import ordersRouter from './routes/orders.js';


let app = express();

app.use(logger('dev'));
app.use(
	history({
		rewrites: [
			{
				from: /^\/api\/.*$/,
				to: function (context) {
					return context.parsedUrl.pathname;
				},
			}
		],
	})
);
app.use(serveStatic('./web/dist'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/payments', paymentsRouter);
app.use('/api/orders', ordersRouter);

export default app;
