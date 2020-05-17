import App from './App'
import { setupDataBase } from './db/database'


async function main(){
    const app = new App()

  try{

    await setupDataBase().then()
    await app.listen().then()

  } catch(err) {
    console.log(err)
  }
} 

main()






