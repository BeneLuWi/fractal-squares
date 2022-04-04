import React, { FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'
import { useTree } from '../../tree/TreeProvider'

type ShareProps = {}

const Share: FunctionComponent<ShareProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { tree } = useTree()

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const handleClick = () => {
    console.log(JSON.stringify(tree))
  }
  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <span className='m-2'>
      <Button variant='dark' className='rounded-pill' onClick={handleClick}>
        <i className='bi bi-file-image' /> &nbsp;Share as Link
      </Button>
    </span>
  )
}

export default Share
