import { Router } from "express";
import { createuser } from "src/Controller/Auth";

const AuthRouter = Router()

// AuthRouter.get("/sign-up", createuser)
AuthRouter.post("/sign-up", createuser)

export default AuthRouter