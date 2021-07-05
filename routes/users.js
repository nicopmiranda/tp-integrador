import express from 'express';
import joi from 'joi';
import dataUsers from '../data/users.js';
import auth from '../middleware/auth.js';
let router = express.Router();

/* GET users listing. */
router.get('/', auth.auth, async function (req, res, next) {
	const users = await dataUsers.getUsers();
	res.send(users);
});

router.get('/validate', auth.auth, async function (req, res, next) {
	res.send('Authenticated');
});

router.get('/:id', async (req, res) => {
	const user = await dataUsers.getUser(req.params.id);
	if (user) {
		res.json(user);
	} else {
		res.status(404).send('Usuario no encontrado');
	}
});

router.post('/', async (req, res) => {
	const body = req.body;
	if (!body.role) {
		body.role = 'user';
	}

	const result = validateUserData(body)
	if (result.error) {
		const field = result.error.details[0].path[0]
		res.status(400).send(getErrorMessageByField(field));
	} else {
		let user = body;
		try {
			const addResult = await dataUsers.addUser(user);
			if (addResult.error) {
				res.status(400).send(addResult.message)
			} else {
				res.status(200).json(user);
			}
		} catch {
			res.status(400).send('El usuario no pudo ser creado')
		}
	}
});

router.put('/:id', auth.auth, async (req, res) => {
	const body = req.body;
	const result = validateUserData(body)

	if (result.error) {
		const field = result.error.details[0].path[0];
		res.status(400).send(getErrorMessageByField(field));
	} else {
		let user = body;
		user._id = req.params.id;
		try {
			const updateResult = await dataUsers.updateUser(user);
			if (!updateResult.error) {
				res.status(200).json(user);
			} else {
				res.status(400).send(updateResult.message);
			}
		} catch (err) {
			res
				.status(400)
				.send('Los datos del usuario no pudieron ser actualizados');
		}
	}
});

router.post('/login', async (req, res) => {
	try {
		const user = await dataUsers.findByCredentials(
			req.body.username,
			req.body.password
		);
		const token = dataUsers.generateAuthToken(user);
		res.send({ user, token });
	} catch (error) {
		res.status(401).send(error.message);
	}
});

router.delete('/:id', auth.authAdmin, async (req, res) => {
	const user = await dataUsers.deleteUser(req.params.id);

	if (!user) {
		res.status(400).send(error.message);
	} else {
		res.json(user);
	}
});

function validateUserData(data) {
	return getUserValidationSchema().validate(data)
}

function getUserValidationSchema() {
	return joi.object({
		name: joi.string().alphanum().required(),
		surname: joi.string().alphanum().required(),
		email: joi.string().email().required(),
		username: joi.string().alphanum().min(4).max(20).required(),
		password: joi
			.string()
			.pattern(new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]){3,30}'))
			.required(),
		role: joi.string().alphanum().allow('user', 'admin')
	});
}

function getErrorMessageByField(field) {
	switch (field) {
		case 'name':
			return 'El nombre es requerido y debe ser alfanumérico';
		case 'surname':
			return 'El apellido es requerido y debe ser alfanumérico';
		case 'email':
			return 'El email es requerido y debe ser un formato de email válido';
		case 'username':
			return 'El nombre de usuario es requerido y debe ser alfanumérico y estar compuesto por entre 4 y 20 caracteres';
		case 'password':
			return 'La contraseña debe contener por lo menos una minúscula, una mayúscula y un número y debe estar compuesta por entre 3 y 30 caracteres';
		case 'role':
			return "El rol puede ser o 'user' o 'admin'";
		default:
			return 'Campos inválidos';
	}
}

export default router;
