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
        
        let match = 100
        let matchedFriend = ''

        let inputData = req.body
        let userScores = inputData.scores

        let scoreDifferences = []

        for (let i = 0; i < friends.length; i++) {
            let totalDifference = 0

            for (let j = 0; j < userScores.length; j++) {
                totalDifference += (Math.abs(friends[i].scores[j]) - (userScores[j]))
            }

            scoreDifferences.push(totalDifference)
        }

        for(let i = 0; i < scoreDifferences.length; i++){
            if(scoreDifferences[i] <= match) {
                match = i
            }
        }
        
        matchedFriend = friends[match]
        res.json(matchedFriend)
    })
}