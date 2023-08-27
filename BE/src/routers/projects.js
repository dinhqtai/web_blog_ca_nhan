import express from "express"
import { getProducts, postProducts } from "../controllers/products";

const routerProducts = express.Router()
routerProducts.get("/", getProducts)
routerProducts.post("/", postProducts)
export default routerProducts;