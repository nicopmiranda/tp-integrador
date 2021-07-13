import connection from './connection.js';
import { ObjectId } from 'mongodb';
import dotenv from 'dotenv';
//import users from './users.js';
dotenv.config();

async function getUsers() {
	const clientMongo = await connection.getConnection();
	const users = await clientMongo
		.db('ecommerce')
		.collection('users')
		.find()
		.toArray();
	return users;
}

async function getOrder(id) {
	const clientMongo = await connection.getConnection();
	const user = await clientMongo
		.db('ecommerce')
		.collection('orders')
		.findOne({ _id: new ObjectId(id) });
	return user;
}

async function addOrder(order) {
	let result = {}
//	if (await users.getUser(order.userId)) {
		const clientMongo = await connection.getConnection();
		result = await clientMongo
			.db('ecommerce')
			.collection('orders')
			.insertOne(order);
/*	} else {
		result.error = true
		result.message = MSG_DUPLICATED_EMAIL
	}*/
	return result;
}
export default {
	addOrder
};
