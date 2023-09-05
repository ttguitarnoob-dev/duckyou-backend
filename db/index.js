const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()

const MONGO_URI = process.env.MONGODB_URI
const poohole = process.env.MONGODB_URI

mongoose.connect(MONGO_URI)
.then(console.log('Duck database model connected to mongo attttt', MONGO_URI))

mongoose.connection.on('error', err => {
    console.log('Something went horribly wrong when connecting to the database', err)
})