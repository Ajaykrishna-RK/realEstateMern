import  express  from "express";
import { test, updateUser } from "../controllers/user.controllers.js";
import { verifyToken } from "../utilis/veriyUser.js";

const router = express.Router()


router.get("/test",test)
router.post('/update/:id',verifyToken,updateUser)

export default router
