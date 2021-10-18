const express = require('express');
const { check, validationResult } = require('express-validator');

const validateResult = require('./validateResult');

const app = express();
app.use(express.json());

const emailController = function (req, res) {
	res.json(`The email: ${req.body.email}`);
};

app.post(
	'/email',
	[
		check('email', 'email is required').notEmpty(),
		check('email', 'email must be a valid email').isEmail().normalizeEmail(),
		validateResult,
	],
	emailController
);

app.listen(4000, () => {
	console.log('Servidor corriendo en el pureto', 4000);
});
