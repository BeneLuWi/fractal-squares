import { SquareNode, SquarePath } from '../square/types'

export const updateNodeInTree = (path: SquarePath, node: SquareNode, tree: SquareNode) => {
  if (!path.length) {
    tree = node
  } else if (path.length === 1) {
    tree[path[0]] = node
  } else {
    updateNodeInTree(path.slice(1), node, tree[path[0]]!)
  }
  return tree
}
