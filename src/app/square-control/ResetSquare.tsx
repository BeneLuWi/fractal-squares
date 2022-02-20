import React, { FunctionComponent, useEffect } from 'react'
import { useTree } from '../tree/TreeProvider'
import { useSpring, a, config } from 'react-spring'

type ResetSquareProps = {}

// const defaultShadow = '0 0 20px 5px #006600'
const defaultShadow = '0 0 0 0 #006600'

const ResetSquare: FunctionComponent<ResetSquareProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { updateNode } = useTree()
  const [styles, api] = useSpring(() => ({ boxShadow: '0 0 0 0 #0ff', transform: 'translate(0px, 0px)' }))

  useEffect(() => {
    api({
      to: [{ transform: 'translate(0px, 0px)' }, { boxShadow: defaultShadow }],
      config: { duration: 200 },
    })
  }, [])

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
    updateNode([], { color: 'black' })
  }
  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <a.div style={styles} className='btn rounded-circle btn-dark' onClick={handleClick}>
      <i className='bi bi-arrow-clockwise' />
    </a.div>
  )
}

export default ResetSquare
