import { Router } from 'express'
import { body, check } from 'express-validator'
import {
  createUser, deleteUser, getUser, getUsers, updateUser
} from '../controllers/users.js'
import { existEmail } from '../db/db-validators.js'
import { validateFields } from '../middlewares/validateFields.js'
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

router.post(
  '/',
  [
    body('email').isEmail().isLength({ max: 40 }),
    check('email').custom(existEmail),
    body('username').isLength({ min: 3, max: 10 }),
    body('password', 'La contraseña deberia tener al menos 8 caracteres').isLength({ min: 8, max: 12 }),
    validateFields
  ],
  createUser
)

router.put('/', updateUser)

router.delete(
  '/:id',
  [
    validateToken,
    check('id', 'Ingrese un Id Valido').isMongoId(),
    validateFields
  ],
  deleteUser
)

router.delete(
  '/account',
  validateToken,
  deleteUser
)

export default router