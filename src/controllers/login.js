import { compareSync } from "bcrypt"
import jwt from 'jsonwebtoken'
import User from "../model/User.js"

export const authentication = async (req, res) => {
  const signature = process.env.SIGNATURE

  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (!user) {
    return res.status(400).json({
      message: 'Verifique la información ingresada e intente nuevamente'
    })
  }

  const isValid = compareSync(password, user.password)

  if (!isValid) {
    return res.status(400).json({
      message: 'Verifique la información ingresada e intente nuevamente'
    })
  }

  // JSON Web Token
  const payload = {
    id: user.id,
    email: user.email
  }

  const accessToken = jwt.sign(payload, signature, { expiresIn: 30 })
  
  res.json({
    message: `Bienvenido ${user.username}!!`,
    accesToken,
  })
}