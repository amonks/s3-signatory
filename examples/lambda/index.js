const bucket = '$S3_BUCKET'

const { sign } = require('s3-signatory')
const ApiBuilder = require('claudia-api-builder')

const api = new ApiBuilder()

const handler = async (req, res) => {
  const { name, type } = req.body
  const { key, signedRequest } = await sign({ bucket, name, type })
  return { key, signedRequest }
}

api.post('/', handler)

module.exports = api

