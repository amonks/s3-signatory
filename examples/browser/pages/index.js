import withState from 'react-with-state'
import SubmitInput from '../components/SubmitInput'
import s3 from 's3-signatory'

const upload = s3.upload({signatoryUrl: 'ENTER YOUR SIGNATORY URL HERE'})

const Index = ({state, setState}) => (
  <main>
    <h2>Enter your name:</h2>
    <SubmitInput onSubmit={async name => {
      const file = new window.Blob([`Your name is: ${name}`], {type: 'text/plain'})
      file.name = `${name}.txt`
      const {bucket, key} = await upload(file)
      setState({bucket, key})
    }}>
      Submit
    </SubmitInput>
    <pre>{JSON.stringify(state, undefined, 2)}</pre>
  </main>
)

const withName = withState({name: '', bucket: '', key: ''})

export default withName(Index)

