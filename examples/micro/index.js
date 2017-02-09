require('dotenv-safe').load({sample: 'example.env'})

const { sign } = require('s3-signatory')
const { json } = require('micro')

const bucket = process.env.S3_BUCKET

console.log({env: process.env})

const handler = async (req, res) => {
  const { name, type } = await json(req)
  const { key, signedRequest } = await sign({
    bucket,
    name,
    type
  })
  return { key, signedRequest, bucket }
}

module.exports = handler

