import React, { FunctionComponent } from 'react'
import UndoLast from './UndoLast'
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
      <DataControl />
    </div>
  )
}

export default SquareControl
