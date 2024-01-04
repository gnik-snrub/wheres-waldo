const apiRouter = require('./routes/api')

require('dotenv').config()

const mongoose = require('mongoose')

mongoose.set('strictQuery', false)
const mongoDB = process.env.MONGO_CT_URL

main().catch((err) => console.log(err))
async function main() {
  await mongoose.connect(mongoDB)
}

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const cors = require('cors')
app.use(cors())

app.use('/api', apiRouter)

app.listen(process.env.PORT, () => console.log('Server started on port ' + process.env.PORT))

module.exports = app;
