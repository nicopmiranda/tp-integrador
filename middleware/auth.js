import jwt from 'jsonwebtoken';

/*El next te dice que sigas, es para continuar una vez autenticado. 
Con axios o fetch se puede armar el request desde el front. */
function auth(req, res, next) {
	try {
		if (!req.header('Authorization')) throw new Error('Se requiere autorización')
		const token = req.header('Authorization').replace('Bearer ', '');
		console.log(token);
		console.log(process.env.SECRET);
		console.log(process.env.SECRET_ADMIN);
		try {
			jwt.verify(token, process.env.SECRET)
			console.log("Entró al petón");
		} catch {
			jwt.verify(token, process.env.SECRET_ADMIN);
			console.log("Entró al admin");
		}
		next();
	} catch (error) {
		console.log("Error");
		res.status(401).send({ error: error.message });
	}
}

function authAdmin(req, res, next) {
	try {
		const token = req.header('Authorization').replace('Bearer ', '');
		jwt.verify(token, process.env.SECRET_ADMIN);
		next();
	} catch (error) {
		res.status(401).send({ error: error.message });
	}
}

export default { auth, authAdmin};
