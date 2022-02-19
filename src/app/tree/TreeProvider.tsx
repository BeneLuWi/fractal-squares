import React, { FunctionComponent, useState } from 'react'
import { SquareNode, SquarePath } from '../square/types'

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

  const updateNode = (path: SquarePath, node: SquareNode) => {}

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return <TreeContext.Provider value={{ tree, updateNode }}>{children}</TreeContext.Provider>
}

export default TreeProvider
