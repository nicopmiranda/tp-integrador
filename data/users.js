import connection from './connection.js';
import { ObjectId } from 'mongodb';

async function getUsers() {
    const clientMongo = await connection.getConnection();
    console.log(clientMongo);
    const users = await clientMongo.db('ecommerce')
        .collection('users')
        .find()
        .toArray();
    return users;
}

async function getUser(id) {
    const clientmongo = await connection.getConnection();
    const user = await clientmongo.db('ecommerce')
        .collection('users')
        .findOne({ _id: new ObjectId(id) });
    return user;
}

async function addUser(user) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('ecommerce')
        .collection('users')
        .insertOne(user);
    return result;
}

async function updateUser(user) {
    const clientmongo = await connection.getConnection();
    const query = { _id: new ObjectId(user._id) };
    const newvalues = {
        $set: {
            name: user.name,
            surname: user.surname,
            email: user.email,
            username: user.username,
            password: user.password
        }
    };

    const result = await clientmongo.db('ecommerce')
        .collection('users')
        .updateOne(query, newvalues);
    return result;
}

async function deleteUser(id) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('ecommerce')
        .collection('users')
        .deleteOne({ _id: new ObjectId(id) });
    return result;
}

export default { getUsers, getUser, addUser, updateUser, deleteUser };