import path from 'path'
import { Database } from 'sqlite3'

class DataBase {

    constructor(name, config){
        this.dataBase = new Database(path.join(__dirname, name))
        this.queries = config
    }

    async createDb(){

        this.dataBase.serialize(() => {
            this.dataBase.run(this.queries.Users)
            this.dataBase.run(this.queries.Tasks)
        })

        return true
    }

    getDataBase(){
        return this.dataBase
    }
}


module.exports = app => {

    const dataBase = new DataBase('tasks-db.sqlite', app.libs.config)
    return dataBase
}
