import connection from './connection.js';
import { ObjectId } from 'mongodb';

async function getProductos() {
    const clientMongo = await connection.getConnection();
    console.log(clientMongo);
    const producto = await clientMongo.db('ecommerce')
        .collection('producto')
        .find()
        .toArray();
    return productos;
}

async function getProducto(id) {
    const clientmongo = await connection.getConnection();
    const producto = await clientmongo.db('ecommerce')
        .collection('producto')
        .findOne({ _id: new ObjectId(id) });
    return producto;
}

async function addProducto(producto) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('ecommerce')
        .collection('producto')
        .insertOne(producto);
    return result;
}

async function updateProducto(producto) {
    const clientmongo = await connection.getConnection();
    const query = { _id: new ObjectId(producto._id) };
    const newvalues = {
        $set: {
           
                   nombre: producto.nombre,
                   descripcion: producto.descripcion,
                   precio : producto.precio,
                   cantidad : producto.cantidad,
                   marca : producto.marca,
                   categorias: producto.categorias,
                   imagen: producto.imagen
            
                }
    };

    const result = await clientmongo.db('ecommerce')
        .collection('producto')
        .updateOne(query, newvalues);
    return result;
}

async function deleteProducto(id) {
    const clientmongo = await connection.getConnection();
    const result = await clientmongo.db('ecommerce')
        .collection('producto')
        .deleteOne({ _id: new ObjectId(id) });
    return result;
}

export default { getProductos, getProducto, addProducto, updateProducto, deleteProducto };