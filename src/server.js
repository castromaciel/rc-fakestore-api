import cors from 'cors'
import express from 'express'
import { apiPaths } from './constants/index.js'
import { dbConnection } from './db/config.js'
import {
  loginRoutes, userRoutes
} from './routes/index.js'

export class Server {

  // propiedades
  constructor() {
    this.app = express()

    this.middlewares()
    this.routes()
    this.connectionDb()
  }

  // metodos
  async connectionDb() {
    await dbConnection()
  }

  middlewares() {
    this.app.use(express.json())

    this.app.use(cors())
  }

  routes() {
    this.app.use(apiPaths.users, userRoutes)
    this.app.use(apiPaths.login, loginRoutes)
  }

  listen() {
    this.app.listen(8080, () => {
      console.log('Servidor corriendo en el puerto 8080')
    })
  }
}
