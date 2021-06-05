
import dataProducto from '../data/producto.js';
import express from 'express';
let router = express.Router();
let joi = require('joi');
router.get('/', function(req, res, next) {
  const productos = await dataProducto.getProductos(req);
  if(productos){
      res.json(productos);
  } else {
      res.status(404).send('error ');
  }

});
router.get('/:id', async (req,res)=>{
  const producto = await dataProducto.getProducto(req.params.id);
  if(producto){
      res.json(producto);
  } else {
      res.status(404).send('Usuario no encontrado');
  }
});
router.post('/', async (req, res)=>{    
  const schema = joi.object({
      nombre: joi.string().alphanum().min(3).required(),
      descripcion: joi.string().alphanum().min(3).required(),
      precio: joi.number().min(0,0).required(),
      cantidad :joi.number().min(1).required(),
      marca: joi.string().alphanum().min(3).required(),
      imagen : joi.image().allowTypes(['png', 'jpg'])

  });
  const result = schema.validate(req.body);
  console.log(result);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  } else{
      let producto = req.body;
      producto = await producto.addProducto(producto);
      res.stats(200).json(producto);
  }    
});
router.put('/:id', async (req, res)=>{    
  const schema = joi.object({
    nombre: joi.string().alphanum().min(3).required(),
    descripcion: joi.string().alphanum().min(3).required(),
    precio: joi.number().min(0,0).required(),
    cantidad :joi.number().min(1).required(),
    marca: joi.string().alphanum().min(3).required(),
    imagen : joi.image().allowTypes(['png', 'jpg'])
  });
  const result = schema.validate(req.body);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  } else{
      let producto = req.body;
      producto._id = req.params.id;
      dataProducto.updateProducto(producto);
      res.json(producto);
  }
});

router.delete('/:id', async (req, res)=>{
  const producto = await dataProducto.getProducto(req.params.id)
  if(!producto){
      res.status(404).send('Producto no encontrado');
  } else {
      dataProducto.deleteProducto(req.params.id);
      res.status(200).send('Producto eliminado');
  }
});

export default router;
