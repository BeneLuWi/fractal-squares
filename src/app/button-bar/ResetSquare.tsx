import React, { FunctionComponent } from 'react'
import { useTree } from '../tree/TreeProvider'
import { useSpring, a, config } from 'react-spring'
import { Button } from 'react-bootstrap'

type ResetSquareProps = {}

const ResetSquare: FunctionComponent<ResetSquareProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { updateNode } = useTree()
  const [styles, api] = useSpring(() => ({ boxShadow: '0 0 0 0 #0ff', transform: 'translate(0px, 0px)' }))

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const handleClick = () => {
    api({
      to: [{ transform: `translate(0px, 0px) scale(0.9)` }, { transform: `translate(0px, 0px) scale(1)` }],
      config: { ...config.gentle, duration: 200 },
    })
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
        <i className='bi bi-arrow-clockwise' /> &nbsp; Reset the Square
      </Button>
    </span>
  )
}

export default ResetSquare
