import connection from './connection.js';
import { ObjectId } from 'mongodb';

async function getProducts() {
	const clientMongo = await connection.getConnection();
	const products = await clientMongo
		.db('ecommerce')
		.collection('products')
		.find()
		.toArray();
	return products;
}

async function getProduct(id) {
	let product = null;
	try {
		const clientmongo = await connection.getConnection();
		product = await clientmongo
			.db('ecommerce')
			.collection('products')
			.findOne({ _id: new ObjectId(id) });
	} catch(err) {
		return product
	}
	return product;
}

async function addProduct(product) {
	const clientmongo = await connection.getConnection();
	const result = await clientmongo
		.db('ecommerce')
		.collection('products')
		.insertOne(product);
	return result;
}

async function updateProduct(product) {
	const clientmongo = await connection.getConnection();
	const query = { _id: new ObjectId(product._id) };
	const newvalues = {
		$set: {
			name: product.name,
			description: product.description,
			price: product.price,
			stock: product.stock,
			brand: product.brand,
			categories: product.categories,
			imageUrl: product.imageUrl
		}
	};

	const result = await clientmongo
		.db('ecommerce')
		.collection('products')
		.updateOne(query, newvalues);
	return result;
}

async function deleteProduct(id) {
	const clientmongo = await connection.getConnection();
	const result = await clientmongo
		.db('ecommerce')
		.collection('products')
		.deleteOne({ _id: new ObjectId(id) });
	return result;
}

export default {
	getProducts,
	getProduct,
	addProduct,
	updateProduct,
	deleteProduct
};
