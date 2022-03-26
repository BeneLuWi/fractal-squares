import React, { FunctionComponent, useState } from 'react'
import { SquareNode, SquarePath } from '../square/types'
import { updateNodeInTree } from './TreeService'
import { useColor } from '../color/ColorProvider'

type TreeProviderProps = {}

export type TreeContextType = {
  tree: SquareNode
  updateNode: (path: SquarePath, node?: SquareNode, expand?: boolean) => void
  undo: VoidFunction
  zoomPath: SquarePath
  zoomIn: (path: SquarePath) => void
  gameType: GameType
  setGameType: React.Dispatch<GameType>
}

export enum GameType {
  SQUARE,
  TRI,
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

  const [gameType, setGameType] = useState(GameType.SQUARE)

  const [tree, setTree] = useState<SquareNode>(defaultTree)

  const [history, setHistory] = useState<SquareNode[]>([defaultTree])

  const [zoomPath, setZoomPath] = useState<SquarePath>([])

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const updateNode = (path: SquarePath, node?: SquareNode, expand?: boolean) => {
    // Reset the Tree
    if (!node) {
      setTree(defaultTree)
      setZoomPath([])
    } else {
      const newNode = expand ? node : selectedPattern.single ? selectedPattern.a : { ...node, ...selectedPattern }
      let newTree: SquareNode = updateNodeInTree(path, newNode, JSON.parse(JSON.stringify(tree)))
      setTree(newTree)
      setHistory([...history.slice(-5), newTree])
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

  return (
    <TreeContext.Provider value={{ tree, updateNode, undo, zoomPath, zoomIn, gameType, setGameType }}>
      {children}
    </TreeContext.Provider>
  )
}

export default TreeProvider
