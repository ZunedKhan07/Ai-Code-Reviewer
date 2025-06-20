import express from 'express';
import cors from 'cors';
import aiRoutes from './routes/ai.route.js'; // correct path

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/ai', aiRoutes); 

export default app;
