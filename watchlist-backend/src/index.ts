import movieRouter from './routes/movies';
import { PORT } from './utils/config';

/* Express */
import express, { type Request } from 'express';
const app = express();
app.use(express.json());
app.use(express.static('dist'));

/* CORS */
import cors from 'cors';
app.use(cors());

/* Logging */
import morgan from 'morgan';
morgan.token('request', (req: Request) => {
  return JSON.stringify(req.body);
});
app.use(morgan(':method :url :status request :request - :response-time ms'));

/* Routes */
app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/movies', movieRouter);

/* Listen to port */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
