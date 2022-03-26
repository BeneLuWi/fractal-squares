import React, { FunctionComponent } from 'react'
import './style.css'
import { SquareNode, SquarePath } from './types'
import { useTree } from '../tree/TreeProvider'
import { a, config, easings, Spring } from 'react-spring'
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
      <svg viewBox='0 0 10 10' preserveAspectRatio='none' fill={node.color} width='100%' height='100%'>
        <svg width='100%' height='50%'>
          <svg width='50%' height='100%'>
            {node.a && <Square path={[...path, 'a']} />}
          </svg>
          <svg width='50%' height='100%' x='5'>
            {node.b && <Square path={[...path, 'b']} />}
          </svg>
        </svg>
        <svg width='100%' height='50%' y='5'>
          <svg width='50%' height='100%'>
            {node.c && <Square path={[...path, 'c']} />}
          </svg>
          <svg width='50%' height='100%' x='5'>
            {node.d && <Square path={[...path, 'd']} />}
          </svg>
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
          <a.rect
            style={{ transformOrigin: 'center' }}
            transform={styles.transform}
            fill={node.color}
            width='100%'
            height='100%'
            strokeWidth='0.1px'
            stroke={node.color}
            {...handleTouch}
          />
        )}
      </Spring>
    )
}

export default Square
