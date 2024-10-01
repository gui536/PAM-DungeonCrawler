import express from "express";
import connection from "./config/sqlConfig.js";
import dotenv from "dotenv";
import routes from "./api/routes/routes.js"
import mssql from "mssql"

dotenv.config();
const app = express();
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT, ()=> 
{
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
});

