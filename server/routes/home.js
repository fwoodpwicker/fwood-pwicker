module.exports = (app, path) => {
    app.get('/home', (_, res) => {
        res.sendFile(path.join(__dirname, '/../public/home.html'))
    })
}