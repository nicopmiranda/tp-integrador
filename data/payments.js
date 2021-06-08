import connection from './connection.js';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function getPayments() {
    const clientMongo = await connection.getConnection();
    
    const payments = await clientMongo.db('ecommerce')
        .collection('payments')
        .find()
        .toArray();
    return payments;
}

async function getPayment(id) {
    const clientMongo = await connection.getConnection();
    const payment = await clientMongo.db('ecommerce')
        .collection('payments')
        .findOne({ _id: new ObjectId(id) });
    return payment;
}

async function sendPayment(payment) {
    const clientMongo = await connection.getConnection();
    
    payment.password = await bcrypt.hash(payment.password, 8);
    const result = await clientMongo.db('ecommerce')
        .collection('payments')
        .insertOne(payment);
    return result;
}

async function updatePayment(payment) {
    const clientMongo = await connection.getConnection();
    const query = { _id: new ObjectId(payment._id) };
    const newvalues = {
        $set: {
            name: payment.name,
            surname: payment.surname,
            email: payment.email,
            paymentname: payment.paymentname,
            password: payment.password,
            role: payment.role
        }
    };

    const result = await clientMongo.db('ecommerce')
        .collection('payments')
        .updateOne(query, newvalues);
    return result;
}

async function findByCredentials(email, password) {
    const clientMongo = await connection.getConnection();
    const payment = await clientMongo.db('ecommerce')
        .collection('payments')
        .findOne({ email: email });

    if(!payment){
        throw new Error('Credenciales inválidas');
    }

    const correctPass = await bcrypt.compare(password, payment.password);
    if(!correctPass){
        throw new Error('Usuario o contraseña incorrectos');
    }

    return payment;
}

function generateAuthToken(payment){
    const token = jwt.sign({_id : payment._id}, process.env.SECRET, {expiresIn : '2h'});
    return token;
}

export default { getPayments, getPayment, addPayment, updatePayment, findByCredentials, generateAuthToken };