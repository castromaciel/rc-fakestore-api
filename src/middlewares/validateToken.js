// Verificar que el usuario haya iniciado sesion, y tenga un token Valido
import jwt from 'jsonwebtoken'

export const validateToken = (req, res, next) => {

  const token = req.headers['accesstoken']

  if (!token) {
    return res.status(401).json({
      message: 'Usted no tiene acceso a esta pagina',
      token: 'No hay token :('
    })
  }

  const signature = process.env.SIGNATURE

  try {
    const data = jwt.verify(token, signature);
    console.log(data)
  } catch(err) {
    // err
    return res.status(401).json({
      message: 'Usted no tiene acceso a esta pagina',
      token: 'Invalid'
    })
  }

  next()
}