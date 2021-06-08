import connection from './connection.js';
import { ObjectId } from 'mongodb';
<<<<<<< HEAD

async function getUsers() {
    const clientMongo = await connection.getConnection();
    console.log(clientMongo);
=======
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

async function getUsers() {
    const clientMongo = await connection.getConnection();
    
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
    const users = await clientMongo.db('ecommerce')
        .collection('users')
        .find()
        .toArray();
    return users;
}

async function getUser(id) {
<<<<<<< HEAD
    const clientmongo = await connection.getConnection();
    const user = await clientmongo.db('ecommerce')
=======
    const clientMongo = await connection.getConnection();
    const user = await clientMongo.db('ecommerce')
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
        .collection('users')
        .findOne({ _id: new ObjectId(id) });
    return user;
}

async function addUser(user) {
<<<<<<< HEAD
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('ecommerce')
=======
    const clientMongo = await connection.getConnection();

    user.password = await bcrypt.hash(user.password, 8);
    const result = await clientMongo.db('ecommerce')
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
        .collection('users')
        .insertOne(user);
    return result;
}

async function updateUser(user) {
<<<<<<< HEAD
    const clientmongo = await connection.getConnection();
=======
    const clientMongo = await connection.getConnection();
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
    const query = { _id: new ObjectId(user._id) };
    const newvalues = {
        $set: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            username: user.username,
<<<<<<< HEAD
            password: user.password
        }
    };

    const result = await clientmongo.db('ecommerce')
=======
            password: user.password,
            role: user.role
        }
    };

    const result = await clientMongo.db('ecommerce')
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
        .collection('users')
        .updateOne(query, newvalues);
    return result;
}

async function deleteUser(id) {
<<<<<<< HEAD
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('ecommerce')
=======
    const clientMongo = await connection.getConnection();
    const result = await clientMongo.db('ecommerce')
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
        .collection('users')
        .deleteOne({ _id: new ObjectId(id) });
    return result;
}

<<<<<<< HEAD
export default { getUsers, getUser, addUser, updateUser, deleteUser };
=======
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
    const token = jwt.sign({_id : user._id}, 'yellow', {expiresIn : '2h'});
    return token;
}

export default { getUsers, getUser, addUser, updateUser, deleteUser, findByCredentials, generateAuthToken };
>>>>>>> b354cc8d0ab1977520adf99536cbcd713613c19b
