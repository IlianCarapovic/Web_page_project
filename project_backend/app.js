import express from 'express';
import perfumesRouter from './routes/perfumes.js';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/perfumes', perfumesRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
