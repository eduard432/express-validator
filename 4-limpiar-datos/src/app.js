const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

const emailController = function (req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	res.json(`The email: ${req.body.email}`);
};

app.post(
	'/email',
	[
		check('email', 'email is required').notEmpty(),
		check('email', 'email must be a valid email').isEmail().normalizeEmail(),
	],
	emailController
);

app.listen(4000, () => {
	console.log('Servidor corriendo en el pureto', 4000);
});
