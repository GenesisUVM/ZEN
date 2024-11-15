import {connectDB} from '../server/Database.jsx'
import express from "express"
import morgan from "morgan"

import authRoutes from './routes/authRoutes.jsx'

connectDB()

const app = express()

app.use(morgan('dev'));

app.use(authRoutes)


app.listen(3000)
console.log('Server on port',)
