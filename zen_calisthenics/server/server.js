import 'vite/modulepreload-polyfill'
import {connectDB} from './Database.jsx'
 import express from "express"
//  import mongoose from "mongoose";
import morgan from "morgan"

import authRoutes from './routes/authRoutes.jsx'

connectDB()

const app = express()

app.use(morgan('dev'));

app.use( '/api', authRoutes)


app.listen(4000)
console.log('Server on port',)



