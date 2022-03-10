import React, { FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'
import { useTree } from '../tree/TreeProvider'

type ZoomOutProps = {}

const ZoomOut: FunctionComponent<ZoomOutProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { zoomIn } = useTree()

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const handleClick = () => {
    zoomIn([])
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <Button variant='dark' onClick={handleClick} className='rounded-circle'>
      <i className='bi bi-arrows-fullscreen' />
    </Button>
  )
}

export default ZoomOut
