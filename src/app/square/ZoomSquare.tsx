import React, { FunctionComponent } from 'react'
import { useTree } from '../tree/TreeProvider'
import Square from './Square'

type ZoomSquareProps = {}

const ZoomSquare: FunctionComponent<ZoomSquareProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/
  const { zoomPath } = useTree()
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

  if (!zoomPath.length) return <Square path={[]} />

  return <Square path={zoomPath} />
}

export default ZoomSquare