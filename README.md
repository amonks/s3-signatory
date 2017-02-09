# s3-signatory

sign s3 uploads

## example

here's an example you can serve with [micro](https://github.com/zeit/micro)

```javascript
import sign from 's3-signatory'

const bucket = 'my-s3-bucket'

const handler = async (req, res) => {
  const { name, type } = req.body
  const { key, signedRequest } = await sign({ bucket, name, type })
  return { key, signedRequest }
}

export default handler
```

