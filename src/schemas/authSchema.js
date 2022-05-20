import joi from 'joi';

const regexName = /^[a-zA-ZáéíóúàâêôãõüçÁÉÍÓÚÀÂÊÔÃÕÜÇ ]+$/;
const regexPassword = /^[0,9]{4,}[a-zA-ZçÇ]{2,}$/;

const schemaSignUp = joi.object({
    name: joi.string().pattern(regexName).required(),
    email: joi.string().email().required(),
    password: joi.string().pattern(regexPassword).required(),
    confirm: joi.ref('password')
});

const schemaSignIn = joi.object({
    email: joi.string().email().required(),
    password: joi.string().pattern(regexPassword).required()
});

export { schemaSignIn, schemaSignUp }