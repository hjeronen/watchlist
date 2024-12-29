import movieRouter from './routes/movies';
import { PORT } from './utils/config';

import express from 'express';
const app = express();
app.use(express.json());
app.use(express.static('dist'));

import cors from 'cors';
app.use(cors());

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/movies', movieRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
