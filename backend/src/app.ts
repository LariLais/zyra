import dotenv from 'dotenv'
import express from "express"
import { router } from "./routes"

const app = express()
app.use(express.json())

// Rotas
app.use("/api", router)

export default app