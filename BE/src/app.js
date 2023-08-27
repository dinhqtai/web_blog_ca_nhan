import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import router from "./routers";
const app = express()
const API_DB = process.env.API_DB;
app.use(express.json());
app.use(cors())
app.use("", router)
mongoose.connect(API_DB);
export const viteNodeApp = app;
