import React from 'react'
import Square from './square/Square'
import TreeProvider from './tree/TreeProvider'
import ResetSquare from './square-control/ResetSquare'

const App: React.FunctionComponent = () => {
  return (
    <TreeProvider>
      <div className='bg-light w-100'>
        <div className='vh-100 bg-white m-auto d-flex flex-column justify-content-between' style={{ maxWidth: 500 }}>
          <div className='display-2'>Fractal Squares</div>
          <Square path={[]} />
          <ResetSquare />
        </div>
      </div>
    </TreeProvider>
  )
}
export default App
