import express from 'express';
const router = express.Router();
import Producto from '../models/producto.js';

router.get('/productos', (req, res) => {
    
    Producto.find()
    .then(productos => {
        res.json(productos);
    })
    .catch(err=>{
        res.status (400).send(err)
    })

});

router.post ('/productos', (req,res)=>{

    const { id, nombre, precio } = req.body;

    const postProducto = Producto({
        id,
        nombre,
        precio
    });

    postProducto.save()
    .then(producto =>{
        res.status(201).json(producto)
    })
    .catch(err=>{
        res.status (400).send(err)
    })

});

router.put('/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const productoActualizado = await Producto.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!productoActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(productoActualizado);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
});

router.delete('/productos/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const productoBorrado = await Producto.findByIdAndDelete(id)

        if (!productoBorrado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(productoBorrado);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
});

//module.exports = router;
export default router;