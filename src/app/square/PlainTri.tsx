import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode, SquarePath } from './types'
import { useTree } from '../tree/TreeProvider'
import { a } from 'react-spring'

type TriProps = {
  path: SquarePath
  color?: string
}

const PlainTri: FunctionComponent<TriProps> = ({ path, color }) => {
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
      <svg viewBox='0 0 100 86' preserveAspectRatio='none'>
        <svg width='50%' height='50%' x='25' viewBox='0 0 100 86'>
          {node.a && <PlainTri path={[...path, 'a']} />}
        </svg>
        <svg width='50%' height='50%' y='43' x='25' viewBox='0 0 100 86'>
          {node.d && (
            <g transform='rotate(180)' style={{ transformOrigin: 'center' }}>
              <PlainTri path={[...path, 'd']} />
            </g>
          )}
        </svg>
        <svg width='50%' height='50%' x='0' y='43' viewBox='0 0 100 86'>
          {node.c && <PlainTri path={[...path, 'c']} />}
        </svg>
        <svg width='50%' height='50%' x='50' y='43' viewBox='0 0 100 86'>
          {node.b && <PlainTri path={[...path, 'b']} />}
        </svg>
      </svg>
    )
  else return <a.polygon points='50,0 100,86 0,86' fill={node.color} />
}

export default PlainTri
