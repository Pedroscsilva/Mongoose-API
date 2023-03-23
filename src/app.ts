import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import routes from './Routes';

const app = express();
app.use(express.json());
app.use(routes.carRoutes);
app.use(routes.motorcycleRoutes);
app.use(ErrorHandler.handle);

export default app;
