import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode, SquarePath } from './types'
import { useTree } from '../tree/TreeProvider'

type PlainSquareSquareProps = {
  path: SquarePath
  color?: string
}

const PlainSquare: FunctionComponent<PlainSquareSquareProps> = ({ path, color }) => {
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
  if (node.a || node.b || node.c || node.d)
    return (
      <svg viewBox='0 0 10 10' preserveAspectRatio='none' fill={node.color} width='100%' height='100%'>
        <svg width='100%' height='50%'>
          <svg width='50%' height='100%'>
            {node.a && <PlainSquare path={[...path, 'a']} />}
          </svg>
          <svg width='50%' height='100%' x='5'>
            {node.b && <PlainSquare path={[...path, 'b']} />}
          </svg>
        </svg>
        <svg width='100%' height='50%' y='5'>
          <svg width='50%' height='100%'>
            {node.c && <PlainSquare path={[...path, 'c']} />}
          </svg>
          <svg width='50%' height='100%' x='5'>
            {node.d && <PlainSquare path={[...path, 'd']} />}
          </svg>
        </svg>
      </svg>
    )
  else
    return (
      <rect
        shapeRendering='crispEdges'
        style={{ transformOrigin: 'center', transform: 'scale(1.01)' }}
        fill={node.color}
        width='100%'
        height='100%'
        stroke={node.color}
        strokeWidth='1px'
      />
    )
}

export default PlainSquare
