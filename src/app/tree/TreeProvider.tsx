import React, { FunctionComponent, useState } from 'react'
import { SquareNode, SquarePath } from '../square/types'
import { updateNodeInTree } from './TreeService'
import { useColor } from '../color/ColorProvider'

type TreeProviderProps = {}

export type TreeContextType = {
  tree: SquareNode
  updateNode: (path: SquarePath, node?: SquareNode) => void
  undo: VoidFunction
  zoomPath: SquarePath
  zoomIn: (path: SquarePath) => void
}

export const useTree = () => React.useContext(TreeContext)

const TreeContext = React.createContext<TreeContextType>(null!)

const defaultTree = { color: 'rgba(113,113,113,1)' }

const TreeProvider: FunctionComponent<TreeProviderProps> = ({ children }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { selectedPattern } = useColor()

  const [tree, setTree] = useState<SquareNode>(defaultTree)

  const [history, setHistory] = useState<SquareNode[]>([defaultTree])

  const [zoomPath, setZoomPath] = useState<SquarePath>([])

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const updateNode = (path: SquarePath, node?: SquareNode) => {
    // Reset the Tree
    if (!node) {
      setTree(defaultTree)
      setZoomPath([])
    } else {
      const newNode = selectedPattern.single ? selectedPattern.a : { ...node, ...selectedPattern }
      let newTree: SquareNode = updateNodeInTree(path, newNode, JSON.parse(JSON.stringify(tree)))
      setTree(newTree)
      setHistory([...history, newTree])
    }
  }

  const undo = () => {
    if (history.length < 2) return
    setTree(history[history.length - 2])
    setHistory(history.slice(0, history.length - 1))
  }

  const zoomIn = (path: SquarePath) => {
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
