import { Router } from 'express'
import { createUser, deleteUser, getUser, getUsers, updateUser } from '../controllers/users.js'

const router = Router()

router.get('/', getUsers)

router.get('/:id', getUser)

router.post('/', createUser)

router.put('/', updateUser)

router.delete('/', deleteUser)

export default router