import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
import chalk from 'chalk';


dotenv.config();
let db = null;

const mongoClient = new MongoClient(process.env.URI_MONGO);
try {
    await mongoClient.connect();
    db = mongoClient.db(process.env.BANCO_MONGO);
    console.log(chalk.green('Conexão com o MongoDB realizada'));
} catch (error) {
    console.log(chalk.red('Erro na conexão com o MongoDB', error));
}

export default db;