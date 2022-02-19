import React from 'react'
import Square from './square/Square'
import TreeProvider from './tree/TreeProvider'

const App: React.FunctionComponent = () => {
  return (
    <div className='bg-light w-100'>
      <div className='vh-100 bg-white m-auto d-flex flex-column justify-content-around' style={{ maxWidth: 500 }}>
        <TreeProvider>
          <Square path={[]} />
        </TreeProvider>
      </div>
    </div>
  )
}
export default App
