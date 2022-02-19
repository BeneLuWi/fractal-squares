import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode } from './types'
import { useTree } from '../tree/TreeProvider'

type SquareProps = {
  path: ('a' | 'b' | 'c' | 'd')[]
  color?: string
}

const Square: FunctionComponent<SquareProps> = ({ path, color }) => {
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
      <div className='square'>
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
  else return <div className='square' style={{ backgroundColor: node.color }} />
}

export default Square
