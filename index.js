import express, { Router } from 'express';
import { routerAPI } from './routes/index.routes.js';
import { boomErrorHandler, errorHandler, handleErrorSQL, logError } from './middlewares/error.handler.js';
import './utils/auth/index.js'

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares

app.use(express.json());

//routes
routerAPI(app)

app.use(logError);
app.use(handleErrorSQL);
app.use(boomErrorHandler);
app.use(errorHandler);

//Exec Server

app.listen(PORT, () => console.log(`Server listening on PORT: ${PORT}`));