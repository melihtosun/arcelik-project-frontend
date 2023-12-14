import  express from "express";
import  {getAllUser, signup, login, signupByGoogle
,getAllUserAdmin} from "../controllers/user-controller.js"

const router = express.Router();
//all of the request will be contained here
router.get("/", getAllUser);
router.get("/getid", getAllUserAdmin);
router.post("/signup", signup);
router.post("/signupByGoogle", signupByGoogle);
router.post("/login", login);
export default router;