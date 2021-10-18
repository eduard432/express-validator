const express = require('express');
const { check, validationResult } = require('express-validator');

const app = express();
app.use(express.json());

const nameController = function (req, res) {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({ errors: errors.array() });
	}

	res.json(`Hello ${req.body.name}`);
};

app.post(
	'/name',
	[check('name', 'name is required').notEmpty()],
	nameController
);

app.listen(4000, () => {
	console.log('Servidor corriendo en el pureto', 4000);
});
