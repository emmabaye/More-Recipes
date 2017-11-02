import  express from 'express';
import dotenv from 'dotenv';
import routes from './routes/v1/index.js';
import  bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

dotenv.config();

const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => {
  console.log('Server listening on port ', port);
});

export default app;
