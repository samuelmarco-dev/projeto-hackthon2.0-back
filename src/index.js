import express, { json } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import chalk from 'chalk';

dotenv.config();

const app = express();
app.use(cors());
app.use(json());

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(chalk.green(`Servidor em http://localhost:${port}`));
});