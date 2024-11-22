import express from 'express';
const app = express();


import mongoose from 'mongoose'
import conexion from './conexion.js'




import productosRoutes from '../routes/productosRoutes.js';
import categoriasRoutes from '../routes/categoriasRoutes.js';
import usuariosRoutes from '../routes/usuariosRoutes.js';



mongoose.connect(conexion)
    .then(() => {
        console.log('Conexión a la base de datos establecida');
    })
    .catch((err) => {
        console.log('Error al conectar a la base de datos', err);
    });

app.listen(3033, () => {
    console.log('Server running on port 3033');
})

app.use(express.json());

app.use(productosRoutes)
app.use(categoriasRoutes)
app.use(usuariosRoutes)