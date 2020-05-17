import { Router } from 'express'

import { 

    createTask,
    getTasks,
    getTask
 
 } from '../controller/taskController'

const router = Router()

router.route('/tasks')
    .post(createTask)
    .get(getTasks)

router.route('/tasks/:id')
    .get(getTask)
export default router