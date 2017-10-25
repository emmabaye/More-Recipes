import express from 'express';
import dotenv from 'dotenv';
import { routes } from './routes/index.js';

const app = express();

dotenv.config();

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});
