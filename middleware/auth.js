import jwt from 'jsonwebtoken';

/*El next te dice que sigas, es para continuar una vez autenticado. 
Con axios o fetch se puede armar el request desde el front. */
function auth(req, res, next) {
	try {
		if (!req.header('Authorization')) throw new Error('Se requiere autorización')
		const token = req.header('Authorization').replace('Bearer ', '');
		try {
			jwt.verify(token, process.env.SECRET)
		} catch {
			jwt.verify(token, process.env.SECRET_ADMIN);
		}
		next();
	} catch (error) {
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
