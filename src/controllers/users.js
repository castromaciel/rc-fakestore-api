import bcrypt from 'bcrypt'
// import { encryptPassword } from '../helpers/encryptPassword.js'
import User from "../model/User.js"

export const getUsers = async (req, res) => {

  const { limit = 10, from = 0} = req.query
  // console.log({limit, from})

  const users = await User.find({})
    .skip(Number(from))
    .limit(Number(limit))

  const total = await User.count()

  // const [users, total] = await Promise.all([
  //   User.find({})
  //     .skip(Number(from))
  //     .limit(Number(limit)),
  //   User.count()
  // ])


  if (users) {
    return res.status(200).json({
      message: 'Usuarios retornados exitosamente',
      total,
      users
    })
  }

  res.status(404).json({
    message: 'No hay usuarios',
    data: []
  })
}

export const getUser = async (req, res) => {

  const { id } = req.params

  const user = await User.findById(id)

  // Verificar que el usuario exista

  res.json({
    message: `Usuario con id ${id}, retornado exitosamente`,
    user
  })
}

export const createUser =  async (req, res) => {
  const {
    email, firstname, username, lastname, password
  } = req.body

  // Verificar que la infromacion ingresada sea valida

  // Validar que los usuarios (por email y nombre de usuario sean unicos)
  // refactorizar con middlewares
  const existEmail = await User.findOne({ email })
  const existUsername = await User.findOne({ username })

  if ( existEmail ) {
    return res.status(400).json({
      message: 'El correo ya existe'
    })
  }

  if ( existUsername ) {
    return res.status(400).json({
      message: 'El username ya existe'
    })
  }

  // ENCRIPTAR LA CONTRASEÑA

  const salt = bcrypt.genSaltSync()
  const hash = bcrypt.hashSync(password, salt)

  // const hash = encryptPassword(password)

  const user = await User({
    email, firstname, username, lastname, password
  })

  user.password = hash
  // user.password = encryptPassword(password)

  try {
  // Guardar la informacion en la base de datos -> DONE
    await user.save()

    res.status(201).json({
      message: `Usuario ${username} creado`
    })

  } catch (error) {
    
    res.status(400).json({
      message: 'Ha ocurrido un error creando el usuario',
      fields: {
        email: error.errors?.email?.message,
        username: error.errors?.username?.message,
        password: error.errors?.password?.message,
      }
    })

  }

}

export const updateUser =  (req, res) => {
  res.json('Editar usuario')
}


export const deleteUser = async (req, res) => {
  const { id } = req.params

  const user = await User.findByIdAndDelete(id)

  // Verificar que el usuario exista
  if (!user) {
    return res.status(404).json({
      message: 'Usuario no encontrado'
    })
  }

  return res.json({
    message: `Usuario ${user?.username} eliminado`
  })
}
