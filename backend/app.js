const apiRouter = require('./routes/api')

require('dotenv').config()

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
