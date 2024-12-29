import express from 'express';
import movieRouter from './routes/movies';
const app = express();
app.use(express.json());
import cors from 'cors';
app.use(cors());

const PORT = 3000;

app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/movies', movieRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
