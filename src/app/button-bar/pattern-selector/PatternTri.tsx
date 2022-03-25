import React, { FunctionComponent } from 'react'
import { Pattern } from '../../color/patterns'

type PatternTriProps = {
  pattern: Pattern
}

const PatternTri: FunctionComponent<PatternTriProps> = ({ pattern }) => {
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
    <svg viewBox='0 0 100 86' preserveAspectRatio='none'>
      <svg width='50%' height='50%' x='25' viewBox='0 0 100 86'>
        <polygon className='square' points='50,0 100,86 0,86' fill={pattern.a.color} />
      </svg>
      <svg width='50%' height='50%' y='43' x='25' viewBox='0 0 100 86'>
        <g transform='rotate(180)' style={{ transformOrigin: 'center' }}>
          <polygon points='50,0 100,86 0,86' fill={pattern.d.color} />
        </g>
      </svg>
      <svg width='50%' height='50%' x='0' y='43' viewBox='0 0 100 86'>
        <polygon points='50,0 100,86 0,86' fill={pattern.c.color} />
      </svg>
      <svg width='50%' height='50%' x='50' y='43' viewBox='0 0 100 86'>
        <polygon points='50,0 100,86 0,86' fill={pattern.b.color} />
      </svg>
    </svg>
  )
}

export default PatternTri
