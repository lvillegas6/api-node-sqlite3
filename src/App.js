import express from 'express'
import startRoute from './routes/index'
import userRoute from './routes/users'

export default class App {

    constructor(port){

        this.port = port || 3000
        this.app = express()
        this.setting()
        this.middlewares()
        this.routes()
    }

    setting(){
        this.app.set('port', process.env.PORT || this.port)
    }

    middlewares(){
        this.app.use(express.json())
    }

    routes(){
        this.app.use(startRoute)
        this.app.use(userRoute)
    }

    async listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}