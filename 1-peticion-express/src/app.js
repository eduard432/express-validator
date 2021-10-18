const express = require('express');

const app = express();
app.use(express.json());

const nameController = function (req, res) {
	res.json(`Hello ${req.body.name}`);
};

app.post('/name', nameController);

app.listen(4000, () => {
	console.log('Servidor corriendo en el pureto', 4000);
});
