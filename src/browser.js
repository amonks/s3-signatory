import axios from 'axios'
const debug = require('debug')('s3-signatory:browser')

export const getSignedRequest = ({signatoryUrl}) => async file => {
  debug('getting signed request', file)
  const response = await axios.post(
    signatoryUrl,
    {name: file.name, type: file.type}
  )
  debug('got signed request', response.data)
  return response.data
}

export const uploadSignedRequest = async (signedRequest, file) => {
  debug('uploading signed request', signedRequest, file)
  const response = await axios.put(
    signedRequest,
    file,
    {
      headers: {
        'Content-Type': file.type
      }
    }
  )
  return response.data
}

export const upload = ({signatoryUrl}) => async file => {
  const {signedRequest, bucket, key} = await getSignedRequest(file, signatoryUrl)
  const result = await uploadSignedRequest(file, signedRequest)
  debug('done!', result)
  return {signedRequest, bucket, key}
}

export default upload

