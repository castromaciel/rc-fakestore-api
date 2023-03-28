// Crear un model/Schema de Usuario
import { model, Schema } from "mongoose"

const UserSchema = new Schema({
  email: {
    type: String,
    required: [true, 'El correo es obligatorio']
  },
  username: {
    type: String,
    required: [true, 'El nombre de usuario es obligatorio']
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'La clave es obligatoria']
  }
})

export default model('User', UserSchema)
