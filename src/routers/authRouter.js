import { Router } from "express";

import { postSignInUser, postSignUpUser } from "../controllers/authControllers.js";
import { validSchemaSignIn, validSchemaSignUp } from "../middlewares/authSchemaMiddleware.js";
import { userExists } from "../middlewares/authMiddleware.js";

const authRouter = Router();

authRouter.post('/sign-in', validSchemaSignIn, userExists, postSignInUser);
authRouter.post('/sign-up', validSchemaSignUp, userExists, postSignUpUser);

export default authRouter;