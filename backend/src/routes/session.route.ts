import { Router } from "express";
import { deleteSessionHandler, getSessionsHandler } from "../controllers/user.controller";

const sessionRoutes =Router();

sessionRoutes.get("/", getSessionsHandler);
sessionRoutes.delete("/:id", deleteSessionHandler);

export default sessionRoutes;
