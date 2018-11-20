let path = require('path')

module.exports = (app) => {

    //Route that leads to home page
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/home.html'))
    })

    //Route to display survey page
    app.get('/survey', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/survey.html'))
    })

}