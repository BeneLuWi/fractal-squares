import React, { FunctionComponent, useState } from 'react'
import PatternSquare from './PatternSquare'
import { useColor } from '../../color/ColorProvider'
import { Pattern } from '../../color/patterns'
import FancyModal from '../../components/FancyModal'
import { PatternFactory } from '../../color/ColorService'
import { Button } from 'react-bootstrap'
import { useTree } from '../../tree/TreeProvider'
import PatternPreview from './PatternPreview'

type SelectPatternProps = {}

const SelectPattern: FunctionComponent<SelectPatternProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [showSelector, setShowSelector] = useState(false)
  const { selectedPattern, setPattern, patterns, selectedBasePattern } = useColor()
  const { gameType } = useTree()
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

  const rotatePatern = () => {
    setPattern({
      ...selectedPattern,
      a: selectedPattern.c,
      b: selectedPattern.a,
      c: selectedPattern.d,
      d: selectedPattern.b,
    })
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <>
      <div className='d-flex'>
        <div className='shadow' onClick={toggleSelector} style={{ width: 40 }}>
          <PatternPreview pattern={selectedPattern} gameType={gameType} />
        </div>
        <Button
          size='sm'
          className='position-absolute rounded-circle'
          style={{ transform: 'translate(5px, -50px)' }}
          variant='dark'
          onClick={() => rotatePatern()}
        >
          <i className='bi bi-arrow-clockwise' />
        </Button>
      </div>
      <FancyModal show={showSelector} close={() => setShowSelector(false)}>
        <div className='d-flex justify-content-around row'>
          {patterns
            .filter((p) => !p.single)
            .map((p) => (
              <div key={p.id} onClick={() => handleSelect(p)} className='m-3' style={{ width: 120 }}>
                <PatternPreview pattern={p} gameType={gameType} />
              </div>
            ))}
        </div>
        <hr className='text-white' />
        <div className='d-flex'>
          {PatternFactory(selectedBasePattern).map((p) => (
            <div key={p.id} onClick={() => handleSelect(p)} className='m-3' style={{ width: 120 }}>
              <PatternPreview pattern={p} gameType={gameType} />
            </div>
          ))}
          <div className='text-white vr' />
          <div onClick={() => handleSelect(selectedBasePattern)} className='m-3' style={{ width: 120 }}>
            <PatternPreview pattern={selectedBasePattern} gameType={gameType} />
          </div>
        </div>
      </FancyModal>
    </>
  )
}

export default SelectPattern
