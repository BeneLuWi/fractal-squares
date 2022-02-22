import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode, SquarePath } from './types'
import { useTree } from '../tree/TreeProvider'
import { a, Spring } from 'react-spring'
import { useLongPress } from 'use-long-press'

type SquareProps = {
  path: SquarePath
  color?: string
}

const Square: FunctionComponent<SquareProps> = ({ path, color }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { tree, updateNode, zoomIn } = useTree()

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  let treeIter: SquareNode | undefined = tree
  path.forEach((n) => {
    if (treeIter && (treeIter[n] || treeIter.color)) treeIter = treeIter[n]
  })
  const node = treeIter

  const handleClick = (event?: any) => {
    if (event && event.type === 'mouseup') updateNode(path, { color: node.color })
  }

  const handleRemove = () => {
    updateNode(path.slice(0, path.length - 1), { color: node.color }, true)
  }

  const handleTouch = useLongPress(handleRemove, {
    onCancel: (event) => handleClick(event),
    captureEvent: true,
  })

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/
  if (node.a || node.b || node.c || node.d)
    return (
      <div className='square' style={{ backgroundColor: node.color }}>
        <div className='d-flex w-100'>
          <div className='w-50'> {node.a && <Square path={[...path, 'a']} />}</div>
          <div className='w-50'> {node.b && <Square path={[...path, 'b']} />}</div>
        </div>
        <div className='d-flex w-100'>
          <div className='w-50'> {node.c && <Square path={[...path, 'c']} />}</div>
          <div className='w-50'> {node.d && <Square path={[...path, 'd']} />}</div>
        </div>
      </div>
    )
  else
    return (
      <Spring
        from={{ opacity: 1, transform: path.length ? 'scale(0.8)' : 'scale(1)' }}
        to={{ opacity: 1, transform: 'scale(1)' }}
      >
        {(styles) => <a.div style={{ ...styles, backgroundColor: node.color }} className='square' {...handleTouch} />}
      </Spring>
    )
}

export default Square
