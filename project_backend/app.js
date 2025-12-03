import express from 'express';
import cors from 'cors';
import perfumesRouter from './routes/perfumes.js';
import addRouter from './routes/form-rout.js'

const app = express();
const port = 3000;

app.use(cors());//Stops html from blocking backend request
app.use(express.json());
app.use('/uploads', express.static('uploads'));


app.use('/perfumes', perfumesRouter);
app.use('/upload', addRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
