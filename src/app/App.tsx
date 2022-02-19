import React from 'react'
import { Container } from 'react-bootstrap'

const App: React.FunctionComponent = () => {
  return (
    <div className='bg-light w-100'>
      <Container className='vh-100 bg-white' style={{ maxWidth: 500 }}>
        Hello
      </Container>
    </div>
  )
}
export default App
