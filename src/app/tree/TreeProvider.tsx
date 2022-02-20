import React, { FunctionComponent, useState } from 'react'
import { SquareNode, SquarePath } from '../square/types'
import { updateNodeInTree } from './TreeService'

type TreeProviderProps = {}

export type TreeContextType = {
  tree: SquareNode
  updateNode: (path: SquarePath, node: SquareNode) => void
  undo: VoidFunction
  zoomPath: SquarePath
  zoomIn: (path: SquarePath) => void
}

export const useTree = () => React.useContext(TreeContext)

const TreeContext = React.createContext<TreeContextType>(null!)

const TreeProvider: FunctionComponent<TreeProviderProps> = ({ children }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [tree, setTree] = useState<SquareNode>({ color: 'rgba(113,113,113,1)' })

  const [history, setHistory] = useState<SquareNode[]>([{ color: 'rgba(113,113,113,1)' }])

  const [zoomPath, setZoomPath] = useState<SquarePath>([])

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const updateNode = (path: SquarePath, node: SquareNode) => {
    let newTree: SquareNode = updateNodeInTree(path, node, JSON.parse(JSON.stringify(tree)))
    setHistory([...history, newTree])
    if (!path.length) setZoomPath([])
    setTree(newTree)
  }

  const undo = () => {
    if (history.length < 2) return
    setTree(history[history.length - 2])
    setHistory(history.slice(0, history.length - 1))
  }

  const zoomIn = (path: SquarePath) => {
    console.log(path)
    setZoomPath(path)
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return <TreeContext.Provider value={{ tree, updateNode, undo, zoomPath, zoomIn }}>{children}</TreeContext.Provider>
}

export default TreeProvider
