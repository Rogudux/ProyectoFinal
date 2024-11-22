import express from 'express';
const router = express.Router();
import Usuario  from '../models/usuario.js';

router.get('/usuarios', (req, res) => {
    
    

    Usuario.find()
    .then(usuarios => {
        res.json(usuarios);
    })
    .catch(err=>{
        res.status (400).send(err)
    })

});

router.post ('/usuarios', (req,res)=>{

    const { id, correo, contra, registro} = req.body;

    const postUsuario = Usuario({
        id,
        correo,
        contra,
        registro
    });

    postUsuario.save()
    .then(usuario =>{
        res.status(201).json(usuario)
    })
    .catch(err=>{
        res.status (400).send(err)
    })

})

router.put('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        const usuarioActualizado = await Usuario.findByIdAndUpdate(
            id,
            updateData,
            { new: true, runValidators: true }
        );

        if (!usuarioActualizado) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        }

        res.json(usuarioActualizado);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }

});

router.delete('/usuarios/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const usuarioBorrado = await Usuario.findByIdAndDelete(id)

        if (!usuarioBorrado) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }

        res.json(usuarioBorrado);
    
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
    
});


export default router;