import { Router } from 'express'
import {
  createUser, deleteUser, getUser, getUsers, updateUser
} from '../controllers/users.js'
import { validateToken } from '../middlewares/validateToken.js'

const router = Router()

router.get(
  '/',
  [
    validateToken
  ],
  getUsers
)

router.get('/:id', getUser)

router.post('/', createUser)

router.put('/', updateUser)

router.delete(
  '/:id',
  validateToken,
  deleteUser
)

router.delete(
  '/account',
  validateToken,
  deleteUser
)

export default router