# HARDCORE

El proyecto es una aplicación web cuyo objetivo es brindar a todos sus usuarios la posibilidad de realizar compras de productos de hardware de una manera fácil, dinámica y segura. Buscamos ofrecer la mejor calidad entre los eCommerce.

### Actores / Roles
Existen tres roles dentro de la aplicación: **Invitado**, **Usuario** y **Admin**. Cada uno tendrá distintos permisos para realizar determinadas funciones.

### Funcionalidades
- Los invitados podrán registrarse en la aplicación. Tanto invitados como usuarios podrán buscar productos, ver el detalle de los mismos, agregar al carrito los productos de su interés y posteriormente realizar la compra. Para realizar la compra de los productos seleccionados, solo los usuarios podrán proseguir al checkout, por lo tanto será mandatorio el registro. En el checkout se podrán agregar datos de facturación, de envío, el método de pago y una promoción si es que se tiene un código promocional. Por último, luego de pagar, el usuario podrá ver una página de confirmación si su transacción fue aprobada y posteriormente podrá visitar su historial de compras en su perfil.
- En su carrito, tanto usuarios como invitados, verán los productos que hayan seleccionado y podrán eliminar productos y modificar la cantidad de los productos que ya tengan agregados. 
- Los usuarios podrán loguearse a la página con su nombre de usuario y su password.
- Los admin podrán agregar, modificar y eliminar productos que luego serán visualizados en la lista de productos. Además, podrán agregar y eliminar usuarios.


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
- Agregar un archivo .env.
- Instalar MongoDB en el equipo.
- _Recomendado_: tener Postman para probar las peticiones a la API y agregar a la variable de ambiente PATH tanto nodejs como el bin de MongoDB.
- _Sugerencia_: si se agrega la variable PORT al .env se puede modificar el puerto utilizado para correr el BackEnd.

### Desarrollo
#### FrontEnd
- Estilos:
    - Para los colores de la aplicación, usar las variables declaradas en App.vue de la siguiente manera: <code>var(--primary-color)</code> y <code>var(--secondary-color)</code>

### Ejecución
- **BackEnd:**
    - <code>npm start</code> (entorno de producción).
    - <code>npm run build</code> (construir lo que necesita el entorno de producción para usar los recursos del FrontEnd).
    - <code>npm run startDev</code> (entorno de desarrollo). Url: http://localhost:{PORT}. Donde {PORT} puede ser una variable de entorno configurada en el archivo .env o 3000, que es el valor por defecto con el que se inicia el servidor en caso de no haber configurada una variable de entorno.
- **FrontEnd:**
    - <code>**cd web/**</code>
        - <code>npm run build</code> (entorno de producción).
        - <code>npm run serve</code> (entorno de desarrollo).
        - <code>npm run lint</code> (para el análisis del código).
        - <code>npm run buildDev</code> (entorno de desarrollo para trabajar en conjunto con el Back). Construye una carpeta con el nombre 'dist' en /web/ cada vez que se actualice el código del Front para que el servidor (corriendo con el script 'npm run startDev') tome los recursos estáticos desde esa carpeta.

Para trabajar en un entorno de desarrollo de manera conjunta entre el Back y el Front, correr los scripts:
1) <code>npm run startDev</code>
2) Abrir otra terminal / consola.
3) <code>cd web/</code>
4) <code>npm run buildDev</code>

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
