import connection from './connection.js';
import { ObjectId } from 'mongodb';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const MSG_DUPLICATED_EMAIL = 'El email ingresado ya existe, trate con otro.';

async function getUsers() {
	const clientMongo = await connection.getConnection();
	const users = await clientMongo
		.db('ecommerce')
		.collection('users')
		.find()
		.toArray();
	return users;
}

async function getUser(id) {
	const clientMongo = await connection.getConnection();
	const user = await clientMongo
		.db('ecommerce')
		.collection('users')
		.findOne({ _id: new ObjectId(id) });
	return user;
}

async function addUser(user) {
	let result = {}
	if (await findUserByEmail(user.email)) {
		result.error = true
		result.message = MSG_DUPLICATED_EMAIL
	} else {
		const clientMongo = await connection.getConnection();
		user.password = await bcrypt.hash(user.password, 8);
		result = await clientMongo
			.db('ecommerce')
			.collection('users')
			.insertOne(user);
	}
	return result;
}

async function updateUser(user) {
	let result = {}
	const foundUserByEmail = await findUserByEmail(user.email);
	if (foundUserByEmail && foundUserByEmail._id != user._id) {
		result.error = true
		result.message = MSG_DUPLICATED_EMAIL
	} else {
		const clientMongo = await connection.getConnection();
		user.password = await bcrypt.hash(user.password, 8);
		const query = { _id: new ObjectId(user._id) };
		const newValues = {
			$set: {
				name: user.name,
				surname: user.surname,
				email: user.email,
				username: user.username,
				password: user.password,
				role: user.role
			}
		};
		result = await clientMongo
			.db('ecommerce')
			.collection('users')
			.updateOne(query, newValues);
	}
	return result;
}

async function deleteUser(id) {
	const clientMongo = await connection.getConnection();
	const result = await clientMongo
		.db('ecommerce')
		.collection('users')
		.deleteOne({ _id: new ObjectId(id) });
	return result;
}

async function findByCredentials(username, password) {
	const clientMongo = await connection.getConnection();
	const user = await clientMongo
		.db('ecommerce')
		.collection('users')
		.findOne({ username: username });

	if (!user) {
		throw new Error('Credenciales inválidas');
	}

	const correctPass = await bcrypt.compare(password, user.password);
	if (!correctPass) {
		throw new Error('Usuario o contraseña incorrectos');
	}

	return user;
}

async function findUserByEmail(email) {
	const clientMongo = await connection.getConnection();
	const user = await clientMongo
		.db('ecommerce')
		.collection('users')
		.findOne({ email });
	return user;
}

function generateAuthToken(user) {
	let secret = process.env.SECRET;
	if (user.role === 'admin') {
		secret = process.env.SECRET_ADMIN;
	}
	const token = jwt.sign({ _id: user._id }, secret, { expiresIn: '2h' });
	return token;
}

export default {
	getUsers,
	getUser,
	addUser,
	updateUser,
	deleteUser,
	findByCredentials,
	generateAuthToken
};
