const { getMeetUp } = require("../controller/apiController");
//route to get products
module.exports = app => {
	app.get("/api/nextMeetUp", getMeetUp);
};
