import 'vite/modulepreload-polyfill'
import {connectDB} from './Database.jsx'
 import express from "express"
//  import mongoose from "mongoose";
import morgan from "morgan"

import authRoutes from './routes/authRoutes.jsx'

connectDB()

const app = express()

app.use(morgan('dev'));

app.use(authRoutes)


app.listen(3000)
console.log('Server on port',)



// const app = express();
// const PORT = process.env.PORT || 5000;

// // Conectar a la base de datos
// mongoose.connect('mongodb+srv://genesis:genesis@cluster0.msjhg.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(() => console.log('Conectado a la base de datos'))
//     .catch(err => console.error('Error de conexión:', err));

// app.use(express.json());

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });