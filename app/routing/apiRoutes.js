

//Route to display JSON
module.exports = (app) => {
    app.get('/api/friends', (req, res) => {
        res.JSON(vaultboyList)
    })

    //Route handling incoming survey results
    app.post('/api/friends', (req, res) => {
        
    })
}

