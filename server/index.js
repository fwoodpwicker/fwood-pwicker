const express = require('express')
const app = express()

const port = 5000
app.listen(port, () => console.log("running on port", port))

app.get('/test', (_, res) => {
    res.json({"stuff": "hey"})
})