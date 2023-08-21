const mongoose = require('mongoose')


const duckSchema = mongoose.Schema ({
    name: String,
    serial: {
        type: String,
        required: true
    },
    locations: [
        {destination: {
            type: String,
            required: true,
            default: "Austin, TX"
        }}
    ],
    images: [{
        url: String,
        caption: String
    }]
}, {timestamps: true})

const Duck = mongoose.model('duck', duckSchema)
module.exports = Duck