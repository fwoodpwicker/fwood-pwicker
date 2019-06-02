const express = require('express')
const app = express()
const path = require('path')

const port = 5000
app.listen(port, () => console.log("running on port", port))

app.use(express.static('public'))

require('./routes/home')(app, path)
