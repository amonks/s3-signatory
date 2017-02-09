## deploy

**replace `$S3_BUCKET` with your s3 bucket name in policies/s3.json and src/index.js**

set up aws credentials one of [these ways](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html#config-settings-and-precedence) (2-5)

```bash
npm install         ## once
npm run build       ## before each deploy
npm run provision   ## first deploy
npm run deploy      ## subsequent deploys
npm run test        ## see some quick log output
npm run destroy     ## get rid of all lambda resources
```

