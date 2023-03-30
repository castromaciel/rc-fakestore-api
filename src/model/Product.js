import { model, Schema } from 'mongoose'

const ProductSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido']
  }
})

export default model('Product', ProductSchema)
