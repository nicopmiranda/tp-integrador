# HARDCORE

El proyecto es una aplicación web cuyo objetivo es brindar a todos sus usuarios la posibilidad de realizar compras de productos de hardware de una manera fácil, dinámica y segura. Buscamos ofrecer la mejor calidad entre los eCommerce.

### Actores / Roles
Existen tres roles dentro de la aplicación: Invitado, Usuario y Admin. Cada uno tendrá distintos permisos para realizar determinadas funciones.

### Funcionalidades


### Entidades principales
- **Product**. Sus atributos son:
    - name (string)
    - price (double)
    - categories (Array de string)
    - brand (string)
    - imageUrl (string)
    - stock (integer)
- **User**. Sus atributos son:
    - name(string)
    - surname(string)
    - username (string)
    - email (string)
    - password (encrypted string)
    - role (string)
- **Payment**. Sus atributos son:
    - billingDetails (BillingDetails)
    - trxAmount (TrxAmount)
    - paymentCard (PaymentCard)
    - shippingDetails (ShippingDetails)

## Instrucciones técnicas
### Instalación del entorno de desarrollo
- Instalar npm (Node Package Manager). Versión: ^6.14.12.
- Instalar NodeJS. Versión: ^14.16.1.
- Instalar las dependencias del proyecto especificadas en el package.json ejecutando “npm install”.
- Archivo .env.
- Instalar MongoDB.
- Recomendado: tener Postman para probar las peticiones a la API y agregar a la variable de ambiente PATH tanto nodejs como el bin de MongoDB.
- Sugerencia: si se agrega PORT al .env se puede modificar el puerto utilizado para correr la app.

### Ejecución
- **BackEnd:**
    - npm start (entorno de producción)
    - npm run startDev (entorno de desarrollo)
    - npm run lint (para el análisis del código)
- **FrontEnd:**
    - cd web/
    - npm run build (entorno de producción)
    - npm run serve (entorno de desarrollo)


## Endpoints
- GET /users
- POST /users
- PUT /users/{idUsuario}
- DELETE /users/{idUsuario}
- GET  /users/{idUsuario} 
- POST /users/login
- POST /products
- GET /products
- GET /products/{idProducto}
- PUT /products/{idProducto}
- DELETE /products/{idProducto}
- POST /payments
