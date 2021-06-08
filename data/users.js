import connection from './connection.js';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

async function getUsers() {
    const clientMongo = await connection.getConnection();
    const users = await clientMongo.db('ecommerce')
        .collection('users')
        .find()
        .toArray();
    return users;
}

async function getUser(id) {
    const clientMongo = await connection.getConnection();
    const user = await clientMongo.db('ecommerce')
        .collection('users')
        .findOne({ _id: new ObjectId(id) });
    return user;
}

async function addUser(user) {
    const clientMongo = await connection.getConnection();

    user.password = await bcrypt.hash(user.password, 8);
    const result = await clientMongo.db('ecommerce')
        .collection('users')
        .insertOne(user);
    return result;
}

async function updateUser(user) {
    const clientMongo = await connection.getConnection();
    const query = { _id: new ObjectId(user._id) };
    const newvalues = {
        $set: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            username: user.username,
            password: user.password,
            role: user.role
        }
    };

    const result = await clientMongo.db('ecommerce')
        .collection('users')
        .updateOne(query, newvalues);
    return result;
}

async function deleteUser(id) {
    const clientMongo = await connection.getConnection();
    const result = await clientMongo.db('ecommerce')
        .collection('users')
        .deleteOne({ _id: new ObjectId(id) });
    return result;
}

async function findByCredentials(email, password) {
    const clientMongo = await connection.getConnection();
    const user = await clientMongo.db('ecommerce')
        .collection('users')
        .findOne({ email: email });

    if(!user){
        throw new Error('Credenciales inválidas');
    }

    const correctPass = await bcrypt.compare(password, user.password);
    if(!correctPass){
        throw new Error('Usuario o contraseña incorrectos');
    }

    return user;
}

function generateAuthToken(user){
    const token = jwt.sign({_id : user._id}, process.env.SECRET, {expiresIn : '2h'});
    return token;
}

export default { getUsers, getUser, addUser, updateUser, deleteUser, findByCredentials, generateAuthToken };
