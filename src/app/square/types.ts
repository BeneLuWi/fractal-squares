export interface SquareNode {
  color?: string
  a?: SquareNode
  b?: SquareNode
  c?: SquareNode
  d?: SquareNode
}

export type SquarePath = ('a' | 'b' | 'c' | 'd')[]
