import { 

   createUser,
   getUsers,
   getUser

} from '../controller/userController'

import { Router } from 'express'
const router = Router()

router.route('/users')
   .get(getUsers)
   .post(createUser)

router.route('/users/:id')
   .get(getUser)

export default router