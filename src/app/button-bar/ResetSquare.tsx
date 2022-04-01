import React, { FunctionComponent } from 'react'
import { GameType, useTree } from '../tree/TreeProvider'
import { Button } from 'react-bootstrap'

type ResetSquareProps = {}

const ResetSquare: FunctionComponent<ResetSquareProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { updateNode, gameType } = useTree()

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const handleClick = () => {
    updateNode([], undefined)
  }
  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <span className='m-2'>
      <Button variant='dark' className='rounded-pill' onClick={handleClick}>
        <i className='bi bi-arrow-clockwise' /> &nbsp; Reset the {gameType === GameType.SQUARE ? 'Square' : 'Triangle'}
      </Button>
    </span>
  )
}

export default ResetSquare
