import express from 'express';
const router = express.Router();
import Categoria from '../models/categoria.js';

router.get('/categorias', (req, res) => {
    
    Categoria.find()
    .then(categorias => {
        res.json(categorias);
    })
    .catch(err=>{
        res.status (400).send(err)
    })

});

router.post ('/categorias', (req,res)=>{

    const { id, nombre} = req.body;

    const postCategoria = Categoria({
        id,
        nombre
    });

    postCategoria.save()
    .then(categoria =>{
        res.status(201).json(categoria)
    })
    .catch(err=>{
        res.status (400).send(err)
    })

});


router.put('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const categoriaActualizado = await Categoria.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!categoriaActualizado) {
            return res.status(404).json({ message: 'categoria no encontrado' });
        }

        res.json(categoriaActualizado);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
});

router.delete('/categorias/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const categoriaBorrado = await Categoria.findByIdAndDelete(id)

        if (!categoriaBorrado) {
            return res.status(404).json({ message: 'Categoria no encontrado' });
        }

        res.json(categoriaBorrado);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
});

// module.exports = router;
export default router;