import chalk from "chalk";

import { schemaSignIn, schemaSignUp } from "../schemas/authSchema.js";

function validSchemaSignIn(req, res, next){
    console.log('objeto in body', req.body);
    const { email, password } = req.body;

    const validation = schemaSignIn.validate({ email, password }, { abortEarly: false });
    console.log(chalk.blue(validation));

    const { error } = validation;
    if(error){
        console.log(chalk.red('A validação com joi encontrou erro'));
        return res.status(422).send(error.details.map(detail => detail.message));
    }
    next();
}

function validSchemaSignUp(req, res, next){
    console.log('objeto in body', req.body);
    const { name, email, password, confirm } = req.body;

    const validation = schemaSignUp.validate({ name, email, password, confirm }, { abortEarly: false });
    console.log(validation);

    const { error } = validation;
    if(error){
        console.log(chalk.red('A validação com joi encontrou erro'));
        return res.status(422).send(error.details.map(detail => detail.message));
    }
    next();
}

export { validSchemaSignIn, validSchemaSignUp }