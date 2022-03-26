import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode, SquarePath } from './types'
import { useTree } from '../tree/TreeProvider'
import { a, config, easings, Spring } from 'react-spring'
import { useLongPress } from 'use-long-press'

type TriProps = {
  path: SquarePath
  color?: string
}

const Tri: FunctionComponent<TriProps> = ({ path, color }) => {
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
      <svg viewBox='0 0 100 86' preserveAspectRatio='none'>
        <svg width='50%' height='50%' x='25' viewBox='0 0 100 86'>
          {node.a && <Tri path={[...path, 'a']} />}
        </svg>
        <svg width='50%' height='50%' y='43' x='25' viewBox='0 0 100 86'>
          {node.d && (
            <g transform='rotate(180)' style={{ transformOrigin: 'center' }}>
              <Tri path={[...path, 'd']} />
            </g>
          )}
        </svg>
        <svg width='50%' height='50%' x='0' y='43' viewBox='0 0 100 86'>
          {node.c && <Tri path={[...path, 'c']} />}
        </svg>
        <svg width='50%' height='50%' x='50' y='43' viewBox='0 0 100 86'>
          {node.b && <Tri path={[...path, 'b']} />}
        </svg>
      </svg>
    )
  else
    return (
      <Spring
        config={{ duration: 500, easing: easings.easeInBack }}
        from={{ opacity: 1, transform: path.length ? 'scale(0.9)' : 'scale(1)' }}
        to={{ opacity: 1, transform: 'scale(1)' }}
      >
        {(styles) => (
          <a.polygon
            points='50,0 100,86 0,86'
            style={{ transformOrigin: 'center' }}
            transform={styles.transform}
            fill={node.color}
            {...handleTouch}
          />
        )}
      </Spring>
    )
}

export default Tri
