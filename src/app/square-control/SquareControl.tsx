import React, { FunctionComponent } from 'react'
import ResetSquare from './ResetSquare'
import UndoLast from './UndoLast'
import ZoomOut from './ZoomOut'
import SelectPattern from './pattern-selector/SelectPattern'
import DataControl from './data-control/DataControl'

type SquareControlProps = {}

const SquareControl: FunctionComponent<SquareControlProps> = () => {
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
    <div className='d-flex justify-content-around p-3'>
      <UndoLast />
      {/*<ZoomOut />*/}
      <SelectPattern />
      <ResetSquare />
    </div>
  )
}

export default SquareControl
