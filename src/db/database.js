import path from 'path'
import fs from 'fs'
import { Database } from 'sqlite3'

const dataSql = fs.readFileSync(__dirname + "/data.sql").toString();
const dataArr = dataSql.toString().split(");");

const dataBase = new Database(path.join(__dirname, 'tasks.sqlite'))

export async function setupDataBase(){
    dataBase.serialize(() => {
        dataArr.forEach(query => {
            if(query){
                query += ");"
                dataBase.run(query, err => {
                    if (err) throw err;
                })
            }
        })
    })
}

export default dataBase