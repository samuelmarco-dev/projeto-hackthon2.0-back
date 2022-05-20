import { Router } from "express";

import { getTest, getTestId, postTest } from '../controllers/testControllers.js';
import { validateIdTest } from "../middlewares/validIdTest.js";
import { validSchemaTest } from "../middlewares/validSchemaTest.js";

const testsRouter = Router();

testsRouter.get("/tests", getTest);
testsRouter.get("/tests/:id", validateIdTest, getTestId);
testsRouter.post("/tests", validSchemaTest, postTest);

export default testsRouter;