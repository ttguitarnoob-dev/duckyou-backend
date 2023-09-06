const mongoose = require('mongoose')


const duckSchema = mongoose.Schema({
    duckName: String,
    serial: {
        type: String,
        required: true
    },
    locations: [
        {
            destination: String,
            dateFound: String,
            coords: Object,
            image: {
                url: {
                    type: String,
                    required: true,
                    default: "https://getduckedimages.s3.us-east-2.amazonaws.com/fta1sicw"
                },
                caption: {
                    type: String,
                    required: true,
                    default: "Duck has been found!"
                }
            }
        }
    ],

}, { timestamps: true })

const Duck = mongoose.model('duck', duckSchema)
module.exports = Duck