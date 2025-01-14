import express from 'express'
import goalRoutes from './routes/goalRoutes.js';

const app = express();

app.use(express.json());
app.use(goalRoutes); // Usa a rota

export default app