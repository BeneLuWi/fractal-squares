import React, { useRef } from 'react'
import TreeProvider from './tree/TreeProvider'
import ButtonBar from './button-bar/ButtonBar'
import ZoomSquare from './square/ZoomSquare'
import ColorProvider from './color/ColorProvider'

const App: React.FunctionComponent = () => {
  return (
    <ColorProvider>
      <TreeProvider>
        <div
          className='bg-light w-100'
          style={{ background: 'radial-gradient(circle, rgba(113,113,113,1) 0%, rgba(61,61,61,1) 100%)' }}
        >
          <div
            className='vh-100 m-auto d-flex flex-column justify-content-between overflow-hidden'
            style={{ maxWidth: 500 }}
          >
            <div className='display-2 text-white-50'>Fractal Squares</div>
            <div>
              <ZoomSquare />
            </div>
            <ButtonBar />
          </div>
        </div>
      </TreeProvider>
    </ColorProvider>
  )
}
export default App
