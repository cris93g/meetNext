require("dotenv").config();
const express = require("express");
const { json } = require("body-parser");
const massive = require("massive");
const cors = require("cors");
routes = require("./routes/routes");
//creates app with express
const app = express();
//creates port
const port = 3001;
//uses cors
app.use(cors());
//body parser to be used when i bring data to parse
app.use(json());
//gets routes from routes folder
routes(app);
// Allows local server to utilize SQL commands within db folder
massive(process.env.CONNECTION_STRING).then(dbinstance => {
	app.set("db", dbinstance);
});
//runs local server
app.listen(port, () => {
	console.log(`app is listening on port ${port}`);
});
