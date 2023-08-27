import express from "express"
import routerProducts from "./products";

const router = express.Router()
router.use("/products", routerProducts)
export default router;