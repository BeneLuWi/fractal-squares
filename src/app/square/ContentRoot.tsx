import React, { FunctionComponent } from 'react'
import Square from './Square'
import { GameType, useTree } from '../tree/TreeProvider'
import Tri from './Tri'

type ZoomSquareProps = {}

const ContentRoot: FunctionComponent<ZoomSquareProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { gameType } = useTree()

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

  if (gameType === GameType.SQUARE)
    return (
      <svg viewBox='0 0 10 10' preserveAspectRatio='none'>
        <Square path={[]} />
      </svg>
    )
  else
    return (
      <svg viewBox='0 0 100 86' preserveAspectRatio='none'>
        <Tri path={[]} />
      </svg>
    )
}

export default ContentRoot
