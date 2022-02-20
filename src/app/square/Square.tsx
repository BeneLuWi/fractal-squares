import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode, SquarePath } from './types'
import { useTree } from '../tree/TreeProvider'
import { Spring, a } from 'react-spring'

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

  const { tree, updateNode } = useTree()

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

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/
  const newNode = {
    color: node.color,
    a: { color: '#265728' },
    b: { color: '#357a38' },
    c: { color: '#459c48' },
    d: { color: '#93cf95' },
  }
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
        {(styles) => (
          <a.div
            style={{ ...styles, backgroundColor: node.color }}
            className='square'
            onClick={() => updateNode(path, newNode)}
          />
        )}
      </Spring>
    )
}

export default Square
