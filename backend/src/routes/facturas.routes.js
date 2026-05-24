import { Router } from "express"
import sql from "../../db/sqlserver.js"

const router = Router()

router.get("/", async (req, res) => {

    try {

        const result = await sql.query(`
            SELECT *
            FROM facturas
            ORDER BY fecha_factura DESC
        `)

        res.json(result.recordset)

    } catch (error) {

        console.error(error)

        res.status(500).json({
            message: "Error obteniendo facturas"
        })

    }

})

export default router