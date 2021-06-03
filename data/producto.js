const path= './data/productos.json';
const fs = require('fs').promises;

async function addProducto(producto){
    const productos = await getProductos();
    inventors.sort((a,b)=> a._id - b._id);
    const lastId = productos[productos.length-1]._id;
    producto._id = lastId + 1;
    productos.push(producto);
    await fs.writeFile(path, JSON.stringify(productos, null, ' '));

    return producto;
}
async function getProductos(){
    const productos = await fs.readFile(path, 'utf-8');
    return JSON.parse(productos);
}

module.exports = {getProductos,addProducto}