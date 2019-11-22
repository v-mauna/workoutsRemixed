const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

app.use(morgan)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, './path/to/static/assets')))
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api', require('./apiRoutes'))
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, './path/to/index.html'))})

 app.use(function (err, req, res, next) {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
    })

app.listen(port, function () {
    console.log("Hi");
    console.log("What's up?");
    console.log(`Your server is up on port ${port}`);
    })