import React, { FunctionComponent } from 'react'
import { GameType, useTree } from './tree/TreeProvider'

type TitleProps = {}

const Title: FunctionComponent<TitleProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const { gameType, setGameType } = useTree()

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const handleChange = () => {
    setGameType(gameType === GameType.SQUARE ? GameType.TRI : GameType.SQUARE)
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <div style={{ cursor: 'pointer' }} className='display-2 text-white-50' onClick={handleChange}>
      Fractal <u>{gameType === GameType.SQUARE ? 'Squares' : 'Triangles'}</u>
    </div>
  )
}

export default Title
