import React, { FunctionComponent } from 'react'
import { Pattern } from '../../color/patterns'
import { GameType } from '../../tree/TreeProvider'
import PatternSquare from './PatternSquare'
import PatternTri from './PatternTri'

type PatternPreviewProps = {
  pattern: Pattern
  gameType: GameType
}

const PatternPreview: FunctionComponent<PatternPreviewProps> = ({ pattern, gameType }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

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
  if (gameType === GameType.SQUARE) return <PatternSquare pattern={pattern} />

  return <PatternTri pattern={pattern} />
}

export default PatternPreview
