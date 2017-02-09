import React from 'react'
import SubmitInput from '../components/SubmitInput'
import s3 from 's3-signatory'

const upload = s3.upload({signatoryUrl: 'ENTER YOUR SIGNATORY URL HERE'})

export default class Index extends React.Component {
  constructor (props) {
    super(props)
    this.state = {name: '', bucket: '', key: ''}
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit (name) {
    const file = new window.Blob([`Your name is: ${name}`], {type: 'text/plain'})
    file.name = `${name}.txt`
    const {bucket, key} = await upload(file)
    this.setState({bucket, key})
  }

  render () {
    return (
      <main>
        <h2>Enter your name:</h2>
        <SubmitInput onSubmit={this.handleSubmit}>
          Submit
        </SubmitInput>
        <pre>{JSON.stringify(this.state, undefined, 2)}</pre>
      </main>
    )
  }
}

