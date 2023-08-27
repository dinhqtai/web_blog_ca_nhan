import express from "express"
import routerProducts from "./projects";
const router = express.Router()
router.use("/projects", routerProducts)
export default router;