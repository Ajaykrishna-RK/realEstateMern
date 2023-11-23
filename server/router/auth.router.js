import express from  "express"
import { signUp, signin } from "../controllers/auth.controllers.js"

const router = express.Router()

router.post("/signup",signUp)
router.post("/signin",signin)

export default router