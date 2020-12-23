const express = require('express')
const bodyParser = require('body-parser');
const router = require('./router/router')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router)
app.listen(8080, () => console.log(`http://127.0.0.1:8080`))