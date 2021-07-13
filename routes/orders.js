import dataOrders from '../data/orders.js';
import express from 'express';
//import joi from 'joi';
import auth from '../middleware/auth.js';
let router = express.Router();

router.post('/', auth.auth, async (req, res) => {
	const body = req.body;

    //validate here
    let order = body;
    try {
        const addResult = await dataOrders.addOrder(order);
        if (addResult.error) {
            res.status(400).send(addResult.message)
        } else {
            res.status(200).json(order);
        }
    } catch {
        res.status(400).send('Hubo un problema al crear la orden')
    }
});

export default router;