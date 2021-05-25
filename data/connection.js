import { MongoClient } from 'mongodb';
//Se saca de Atlas, segunda opción en la parte de Connect (no es lo más conveniente dejarlo así igual)
const uri = "mongodb+srv://admin:admin112233@cluster0.l1wce.mongodb.net/ecommerce?retryWrites=true&w=majority";

const client = new MongoClient(uri);

let instance = null;

async function getConnection(){
    if(instance == null){
        try {
            instance = await client.connect();
            console.log("conectado");
        } catch (err) {
            console.log(err.message);
            throw new Error('problemas al conectarse con mongo');
        }
    }
    return instance;
}

export default {getConnection};
