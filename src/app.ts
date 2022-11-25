import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import morgan from 'morgan'
import * as dotenv from 'dotenv'
import router from './routes/service.routes'

const app = express()

// middlewares

app.use(helmet())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(morgan('dev'))

dotenv.config()

if(!process.env.PORT){
  process.exit(1)
}

const PORT: number = parseInt(process.env.PORT as string, 10)

const port = PORT || 3000

// routes
app.get('/', (req, res)=> res.send('MS User Data'))
app.use('/v1/users', router)

export {app, port}