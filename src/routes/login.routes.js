import { Router } from 'express'
import { authentication } from '../controllers/login.js'

const router = Router()

router.post('/', authentication)

export default router