//IMPORTS
const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')
const app = express()
require('./db')
const methodOverride = require('method-override')

//CONTROLLERS
const ducksController = require('./controllers/ducks')

//CONFIG
const PORT = 8000
const acceptList = ["0.0.0.0", "http://localhost:3000", "http://10.24.24.167:3000", "https://duckyou.ttguitarnoob.cloud"]
const options = {
    origin: function(origin, callback){
        console.log('origin', origin)
        if (acceptList.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        } else {
            callback( new Error ("Not allowed by Cors, bro"))
        }
    }
}

//MIDDLEWARE
app.use(cors(options))
app.use(express.json())
app.use('/ducks', ducksController)
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

//ROUTING

//home route
app.get('/', (req, res) => {
    res.json({
        status: 200,
        body: "Home Route"
    })
})

//START SERVER
app.listen(PORT, () => {
    console.log(`Get Ducked Backend Server Running on Port ${PORT}!!!!`)
})
