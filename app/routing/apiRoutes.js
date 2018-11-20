let friends = require('../data/friends.js')

//Route to display JSON
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.json(friends)
    })

    //Route handling incoming survey results
    app.post('/api/friends', (req, res) => {
        
    })
}

