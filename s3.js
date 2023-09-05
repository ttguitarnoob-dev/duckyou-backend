
const aws = require('aws-sdk')
const dotenv = require('dotenv')
const randomBytes = require('crypto')

const region = "us-east-2"
const bucketName = "getduckedimages"
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new aws.S3({
    region,
    accessKeyId,
    secretAccessKey,
    signatureVersion: 'v4'
})

async function generateURL() {
    console.log('generating url')
    const imageName = Math.floor(Math.random() * Date.now()).toString(36)
    console.log('imagename', imageName)

    const params = ({
        Bucket: bucketName,
        Key: imageName,
        Expires: 60
    })

    const uploadURL = await s3.getSignedUrlPromise('putObject', params)
    return uploadURL
}

module.exports = { generateURL }