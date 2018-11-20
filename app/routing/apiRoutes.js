let friends = require('../data/friends.js')
let questions = require('../data/questions.js')

//Route to display JSON
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })

    app.get('/api/questions', (req, res) => {
        res.json(questions)
    })

    //Route handling incoming survey results
    app.post('/api/friends', (req, res) => {
        
    })
}

