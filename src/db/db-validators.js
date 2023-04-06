import User from "../model/User.js"

export const existEmail = async (email) => {

  const user = await User.findOne({ email })

  if ( user ) {
    throw new Error(`El usuario con el correo ${email}, ya existe!!`)
  }
}