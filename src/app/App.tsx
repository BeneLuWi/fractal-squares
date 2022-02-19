import React from 'react'
import Square from './square/Square'
import TreeProvider from './tree/TreeProvider'

const App: React.FunctionComponent = () => {
  return (
    <div className='bg-light w-100'>
      <div className='vh-100 bg-white m-auto d-flex flex-column justify-content-between' style={{ maxWidth: 400 }}>
        <div className='display-4'>Fractal Squares</div>
        <TreeProvider>
          <Square path={[]} />
        </TreeProvider>
        <div className='w-100 bg-primary' style={{ height: 50 }} />
      </div>
    </div>
  )
}
export default App
