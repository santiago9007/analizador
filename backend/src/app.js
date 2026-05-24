import express from "express"
import cors from "cors"

import { connectDB } from "../db/sqlserver.js"

import routes from "./routes/facturas.routes.js"

const app = express()

// Middlewares
app.use(cors())

app.use(express.json())

// Conexión SQL Server
connectDB()

// Ruta principal
app.get("/", (req, res) => {

    res.json({
        message: "API Jaltech funcionando"
    })

})

// Rutas API
app.use("/api/facturas", routes)

const PORT = 3000

app.listen(PORT, () => {

    console.log(`Servidor corriendo en puerto ${PORT}`)

})