import { Router } from "express";
import SignUp from "../controllers/signup";
import SignIn from "../controllers/signin";
import GetUsers from "../controllers/getUsers";

const Routes = Router();

Routes.post("/signin", SignIn);
Routes.post("/signup", SignUp);
Routes.get("/users", GetUsers);

export default Routes;
