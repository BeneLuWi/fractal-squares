import React, { FunctionComponent, useState } from 'react'
import { SquareNode } from '../square/types'

type TreeProviderProps = {}

export type TreeContextType = {
  tree: SquareNode
  setTree: (node: SquareNode) => void
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

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return <TreeContext.Provider value={{ tree: tree, setTree: setTree }}>{children}</TreeContext.Provider>
}

export default TreeProvider
