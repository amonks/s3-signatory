# s3-signatory

It's often useful to create a file in the browser and then upload it to s3. You could upload it to your server first, but that's both slow _and_ lame.

In order to upload a file from the browser to s3, you need a _signed request url_. This library is for making _signed request urls_.

You'll find (legit, deployable) example microservices for AWS Lambda and zeit/now in the [examples directory](https://github.com/theuprising/s3-signatory/tree/master/examples)

You'll also find a very minimal example of the browser integration in that same folder.

## api

### browser

#### **getSignedRequest**

```
{signatoryUrl: string}
=> {name: string, type: string}
=> Promise<string>
```

#### **uploadSignedRequest**

```
(signedRequest: string, {name: string, type: string})
=> Promise<{ key: string, bucket: string, signedRequest: string }>
```

#### **upload**, **default**

```
{name: string, type: string, signatoryUrl: string}
=> Promise<{ key: string, bucket: string, signedRequest: string }>
```

### node

#### **sign**, **default**

```
{signatoryUrl: string}
=> ({bucket: string, name: string, type: string}, signedRequest: string)
=> Promise<{ key: string, signedRequest: string }>
```

