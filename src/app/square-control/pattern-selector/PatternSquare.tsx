import React, { FunctionComponent } from 'react'
import { Pattern } from '../../color/patterns'

type PatternSquareProps = {
  pattern: Pattern
}

const PatternSquare: FunctionComponent<PatternSquareProps> = ({ pattern }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <div className='square'>
      <div className='d-flex w-100'>
        <div className='w-50'>
          <div className='square' style={{ backgroundColor: pattern.a.color }} />
        </div>
        <div className='w-50'>
          <div className='square' style={{ backgroundColor: pattern.b.color }} />
        </div>
      </div>
      <div className='d-flex w-100'>
        <div className='w-50'>
          <div className='square' style={{ backgroundColor: pattern.c.color }} />
        </div>
        <div className='w-50'>
          <div className='square' style={{ backgroundColor: pattern.d.color }} />
        </div>
      </div>
    </div>
  )
}

export default PatternSquare
