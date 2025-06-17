import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/Router.js';

dotenv.config();

const port = process.env.POST;

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);
app.listen(port, () =>{
    console.log(`Server running on port ${port}`)
});
