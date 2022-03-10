import React, { FunctionComponent, useState } from 'react'
import PatternSquare from './PatternSquare'
import { useColor } from '../../color/ColorProvider'
import { Pattern } from '../../color/patterns'
import FancyModal from '../../components/FancyModal'
import { PatternFactory } from '../../color/ColorService'

type SelectPatternProps = {}

const SelectPattern: FunctionComponent<SelectPatternProps> = ({}) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [showSelector, setShowSelector] = useState(false)
  const { selectedPattern, setPattern, patterns, selectedBasePattern } = useColor()

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
      <FancyModal show={showSelector} close={toggleSelector}>
        <div className='d-flex justify-content-around row'>
          {patterns
            .filter((p) => !p.single)
            .map((p) => (
              <div key={p.id} onClick={() => handleSelect(p)} className='m-3' style={{ width: 120 }}>
                <PatternSquare pattern={p} />
              </div>
            ))}
        </div>
        <hr className='text-white' />
        <div className='d-flex'>
          {PatternFactory(selectedBasePattern).map((p) => (
            <div key={p.id} onClick={() => handleSelect(p)} className='m-3' style={{ width: 120 }}>
              <PatternSquare pattern={p} />
            </div>
          ))}
          <div className='text-white vr' />
          <div onClick={() => handleSelect(selectedBasePattern)} className='m-3' style={{ width: 120 }}>
            <PatternSquare pattern={selectedBasePattern} />
          </div>
        </div>
      </FancyModal>
    </>
  )
}

export default SelectPattern
