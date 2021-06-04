let joi = require('joi');
import express from 'express';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/', async (req, res)=>{    
  const schema = joi.object({
      nombre: joi.string().alphanum().min(3).required(),
      descripcion: joi.string().alphanum().min(3).required(),
      precio: joi.number().min(0,0).required(),
      cantidad :joi.number().min(1).required(),
      marca: joi.string().alphanum().min(3).required()
     

  });
  const result = schema.validate(req.body);
  console.log(result);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  } else{
      let producto = req.body;
      producto = await producto.addProducto(producto);
      res.json(producto);
  }    
});

export default router;
