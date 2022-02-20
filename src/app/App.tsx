import React from 'react'
import Square from './square/Square'
import TreeProvider from './tree/TreeProvider'
import SquareControl from './square-control/SquareControl'

const App: React.FunctionComponent = () => {
  return (
    <TreeProvider>
      <div
        className='bg-light w-100'
        style={{
          background: 'radial-gradient(circle, rgba(113,113,113,1) 0%, rgba(61,61,61,1) 100%)',
        }}
      >
        <div
          className='vh-100 m-auto d-flex flex-column justify-content-between overflow-hidden'
          style={{ maxWidth: 500 }}
        >
          <div className='display-2 text-white-50'>Fractal Squares</div>
          <Square path={[]} />

          <SquareControl />
        </div>
      </div>
    </TreeProvider>
  )
}
export default App
