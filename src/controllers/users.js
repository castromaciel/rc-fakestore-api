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

export const getUser = (req, res) => {

  const { id } = req.params

  res.json(`Usuario con id ${id}, retornado exitosamente`)
}

export const createUser =  async (req, res) => {
  const {
    email, firstname, username, lastname, password
  } = req.body

  // Verificar que la infromacion ingresada sea valida

  // Guardar la informacion en la base de datos -> DONE
  // ENCRIPTAR LA CONTRASEÑA

  const user = await User({
    email, firstname, username, lastname, password
  })

  try {
    user.save()

    res.status(201).json({
      message: `Usuario ${username} creado`
    })

  } catch (error) {
    
    res.status(500).json({
      message: 'Ha ocurrido un error creando el usuario'
    })

    console.log(error)
  }



}

export const updateUser =  (req, res) => {
  res.json('Editar usuario')
}


export const deleteUser = (req, res) => {
  res.json('Eliminar usuario')
}