const mongoose = require('mongoose')
const MONGO_URI = 'mongodb+srv://jjones:V6Y50br9DDeUGneg@getducked.cscm3wx.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI)
.then(console.log('Duck database model connected to mongo at', MONGO_URI))

mongoose.connection.on('error', err => {
    console.log('Something went horribly wrong when connecting to the database', err)
})