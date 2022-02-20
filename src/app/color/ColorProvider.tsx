import React, { FunctionComponent, useState } from 'react'
import { DefaultPatterns, Pattern } from './patterns'

type ColorProviderProps = {}

export interface ColorContextType {
  patterns: Pattern[]
  selectedPattern: Pattern
  setPattern: (pattern: Pattern) => void
}

export const ColorContext = React.createContext<ColorContextType>(null!)

export const useColor = () => {
  return React.useContext(ColorContext)
}

const ColorProvider: FunctionComponent<ColorProviderProps> = ({ children }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [patterns, setPatterns] = useState<Pattern[]>(DefaultPatterns)

  const [selectedPattern, setSelectedPattern] = useState<Pattern>(DefaultPatterns[0])

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const setPattern = (pattern: Pattern) => {
    setSelectedPattern(pattern)
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return <ColorContext.Provider value={{ patterns, selectedPattern, setPattern }}>{children}</ColorContext.Provider>
}

export default ColorProvider