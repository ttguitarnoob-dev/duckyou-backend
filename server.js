//IMPORTS
const express = require('express')
const cors = require('cors')
const res = require('express/lib/response')
const app = express()
require('./db')
const methodOverride = require('method-override')
const tempUrl = require('./s3.js')

//CONTROLLERS
const ducksController = require('./controllers/ducks')
const storesController = require('./controllers/stores')
const buyDucksController = require('./controllers/buyducks')

//CONFIG
const PORT = process.env.PORT || 8000
const acceptList = ["0.0.0.0", "http://localhost:3000", "https://getducked.org", "https://duckyou.ttguitarnoob.cloud", "https://www.getducked.org, http://getducked.org"]
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
app.use('/stores', storesController)
app.use('/buyducks', buyDucksController)
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

//ROUTING

//home route
app.get('/', (req, res) => {
    res.status(200).json({
        message: "If you're not supposed to be here, begone."
    })
})

//Generate url for s3 updload
app.get('/tempurl', async (req, res) => {
    const url = await tempUrl.generateURL()
    res.send({url})
})

//START SERVER
app.listen(PORT, () => {
    console.log(`Get Ducked Backend Server Running on Port ${PORT}!!!!`)
})
