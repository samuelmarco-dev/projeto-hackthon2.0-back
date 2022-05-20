import { testSchema } from "../schemas/testSchema.js";

export function validSchemaTest(req, res, next){
    const validation = testSchema.validate(req.body, {abortEarly: false});
    console.log(validation);

    const { error } = validation;
    if (error) {
        console.log(error);
        return res.status(422).send(error.details.map(e => e.message));
    }
    next();
}