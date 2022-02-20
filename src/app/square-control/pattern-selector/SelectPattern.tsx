import React, { FunctionComponent, useState } from 'react'
import PatternSquare from './PatternSquare'
import { useColor } from '../../color/ColorProvider'
import { Pattern } from '../../color/patterns'
import PatternModal from './PatternModal'

type SelectPatternProps = {}

const SelectPattern: FunctionComponent<SelectPatternProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [showSelector, setShowSelector] = useState(false)
  const { selectedPattern, setPattern, patterns } = useColor()

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const toggleSelector = () => setShowSelector(!showSelector)

  const handleSelect = (pattern: Pattern) => {
    toggleSelector()
    setPattern(pattern)
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <>
      <div className='shadow' onClick={toggleSelector} style={{ width: 40 }}>
        <PatternSquare pattern={selectedPattern} />
      </div>
      <PatternModal show={showSelector} close={toggleSelector}>
        <div className='d-flex justify-content-around row'>
          {patterns.map((p) => (
            <div key={p.id} onClick={() => handleSelect(p)} className='m-3' style={{ width: 120 }}>
              <PatternSquare pattern={p} />
            </div>
          ))}
        </div>
      </PatternModal>
    </>
  )
}

export default SelectPattern
