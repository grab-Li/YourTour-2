const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost:27017/yourtourDB', { useNewUrlParser: true, useUnifiedTopology: true });

const tourSchema = new mongoose.Schema({
	name: String,
	email: String,
	destination: String,
	startDate: Date,
	endDate: Date
});

const Tour = mongoose.model('Tour', tourSchema);

app.post('/submit-tour', (req, res) => {
	const newTour = new Tour({
		name: req.body.name,
		email: req.body.email,
		destination: req.body.destination,
		startDate: req.body.startDate,
		endDate: req.body.endDate
	});

	newTour.save((err) => {
		if (!err) {
			res.send('Successfully added a new tour!');
		} else {
			res.send(err);
		}
	});
});

app.listen(3000, () => {
	console.log('Server is running on port 3000');
});
