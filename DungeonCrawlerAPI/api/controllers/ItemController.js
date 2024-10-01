import connection from "../../config/sqlConfig.js";

let tableName = "Item";

async function getAllItems(req, res) {
    try{
    let result = await connection.query(`SELECT * FROM ${tableName};`);
    res.send(result.recordset);
    console.table(result.recordset);
    }
    catch(ex){
        console.log(ex.message);
    }
}

async function getItemById(req, res) {
    try{
    let result = await connection.query(`SELECT * FROM ${tableName} WHERE ID = ${req.params.id};`);
    res.send(result.recordset);
    console.table(result.recordset);
    }
    catch(ex){
        console.log(ex.message);
    }
}

export {getAllItems, getItemById}