import sql from "mssql"
import dotenv from "dotenv"

dotenv.config()

const sqlConfig = {

    user: process.env.DB_USER,

    password: process.env.DB_PASSWORD,

    server: "LAPTOP-R5E2TUDL",

    database: process.env.DB_DATABASE,

    port: 1433,

    options: {

        trustServerCertificate: true,

        encrypt: false

    }

}

export const connectDB = async () => {

    try {

        const connection = await sql.connect(sqlConfig)

        console.log("✅ SQL Server conectado")

        return connection

    } catch (error) {

        console.error("❌ Error SQL Server:")

        console.error(error)

    }

}

export default sql