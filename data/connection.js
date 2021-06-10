import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
//Se saca de Atlas, segunda opción en la parte de Connect (no es lo más conveniente dejarlo así igual)
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

let instance = null;

async function getConnection() {
	if (instance == null) {
		try {
			instance = await client.connect();
			console.log('conectado');
		} catch (err) {
			console.log(err.message);
			throw new Error('problemas al conectarse con mongo');
		}
	}
	return instance;
}

export default { getConnection };
