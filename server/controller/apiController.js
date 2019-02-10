require("dotenv").config();
const axios = require("axios");

let ID = process.env.ID;
axios
	.get(
		`https://api.meetup.com/find/upcoming_events?photo-host=public&page=1&${ID}`
	)
	.then(response => {
		meetUp = response.data;
		console.log(meetUp);
		return meetUp;
	});

let getMeetUp = (req, res) => {
	res.status(200).send(meetUp);
	console.log(meetUp);
};

module.exports = {
	getMeetUp
};
