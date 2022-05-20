import chalk from "chalk";
import db from "../mongoDB.js";

export async function userExists(req, res, next){
    const { email } = req.body;
    console.log('Email user', email);

    try {
        const user = await db.collection('users').findOne({ email });
        console.log('user in collection', user);

        res.locals = user;
        next();
    } catch (error) {
        console.log(chalk.red('Erro ao conectar-se com o banco de dados'));
        res.sendStatus(500);
    }
}