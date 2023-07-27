import express from 'express';
import jobServices from './services/jobServices';
import jobAppRouter from './route/jobapplications';
const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send(jobServices.getEntries());
});
app.get('/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});
// route to handle job applications
app.use('/api/jobapps', jobAppRouter);



const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}/ping`);
});