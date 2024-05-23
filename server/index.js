require('./config/dbconfig')
const express = require('express')
const cors = require('cors')
const bodyparser = require('body-parser')
const app = express();
PORT = process.env.PORT;

const authRoute = require("./routes/auth.route");

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors());

app.use('/auth',authRoute)

app.listen(PORT, () => {
    console.log('listening to ' + PORT);
}) 


// var currentdate = new Date().toLocaleDateString();
// var time = new Date(). toLocaleTimeString();

// console.log(`${currentdate} ${time}`);
