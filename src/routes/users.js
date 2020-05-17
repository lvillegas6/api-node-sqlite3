import { 

   createUser,
   getUsers,
   getUser,
   deleteUser

} from '../controller/userController'

import { Router } from 'express'
const router = Router()

router.route('/users')
   .get(getUsers)
   .post(createUser)

router.route('/users/:id')
   .get(getUser)
   .delete(deleteUser)

export default router