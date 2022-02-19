import React, { FunctionComponent, useState } from 'react'
import { SquareNode, SquarePath } from '../square/types'
import { updateNodeInTree } from './TreeService'

type TreeProviderProps = {}

export type TreeContextType = {
  tree: SquareNode
  updateNode: (path: SquarePath, node: SquareNode) => void
}

export const useTree = () => React.useContext(TreeContext)

const TreeContext = React.createContext<TreeContextType>(null!)

const TreeProvider: FunctionComponent<TreeProviderProps> = ({ children }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [tree, setTree] = useState<SquareNode>({ color: 'black' })

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const updateNode = (path: SquarePath, node: SquareNode) => {
    console.log(path)
    let newTree: SquareNode = JSON.parse(JSON.stringify(tree))
    const newNode = {
      a: { color: '#265728' },
      b: { color: '#357a38' },
      c: { color: '#459c48' },
      d: { color: '#93cf95' },
    }
    setTree(updateNodeInTree(path, newNode, newTree))
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return <TreeContext.Provider value={{ tree, updateNode }}>{children}</TreeContext.Provider>
}

export default TreeProvider
