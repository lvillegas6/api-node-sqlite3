import indexStart from '../controller/index'
import { Router } from 'express'

const router = Router()

router.route('/')
    .get(indexStart)

export default router