import aws from 'aws-sdk'
import uuid from 'node-uuid'

const s3 = new aws.S3()

export const makeKey = name => uuid.v4() + '/' + name

export const makeParams = ({bucket, name, type}) => ({
  Bucket: bucket,
  Key: makeKey(name),
  Expires: 60,
  ContentType: type,
  ACL: 'public-read'
})

export const sign = opts => new Promise((resolve, reject) => {
  const params = makeParams(opts)
  const key = params.Key

  s3.getSignedUrl('putObject', params, (err, data) => {
    if (err) {
      return reject(err)
    }
    resolve({
      signedRequest: data,
      key
    })
  })
})

export default sign

