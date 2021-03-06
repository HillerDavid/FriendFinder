let express = require('express')
let path = require('path')

let app = express()

let PORT = process.env.PORT || 80

app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(__dirname + '/app/public'))
app.use(express.json())

require('./app/routing/apiRoutes.js')(app)
require('./app/routing/htmlRoutes.js')(app)

app.listen(PORT, () => {
    console.log('Listening on: http://localhost: ' + PORT)
})