import express from 'express';
import joi from 'joi';
import dataUsers from '../data/users.js';
let router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', async (req,res)=>{
  const user = await dataUsers.getUser(req.params.id);
  if(user){
      res.json(user);
  } else {
      res.status(404).send('Usuario no encontrado');
  }
});

router.post('/', async (req, res)=>{    
  const schema = joi.object({
      name: joi.string().alphanum().required(),
      surname: joi.string().alphanum().required(),
      email: joi.string().email().required(),
      username: joi.string().alphanum().min(4).max(20).required(),
      password: joi.string().pattern( new RegExp('[a-zA-Z0-9]{3,30}') ).required()
  });
  const result = schema.validate(req.body);
  console.log(result);
  if(result.error){
      res.status(400).send(result.error.details[0].message);
  } else{
      let user = req.body;
      await dataUsers.addUser(user);
      res.status(200).json(user);
  }    
});

export default router;
