import joi from 'joi';

export const testSchema = joi.object({
    title: joi.string().required(),
    type: joi.string().valid("Matemática", "Ciências", "Geografia", "História").required(),
    questions: joi.array().items(joi.object({
        title: joi.string().required(),
        answers: joi.array().items(joi.object({
            text: joi.string().required(),
            isTrue: joi.boolean().required()
        }).required()).required()
    }).required()).required()
});