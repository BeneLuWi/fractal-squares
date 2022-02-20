import React, { FunctionComponent, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import PatternSquare from './PatternSquare'
import { useColor } from '../../color/ColorProvider'
import { Pattern } from '../../color/patterns'

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
      <Modal show={showSelector} onHide={toggleSelector}>
        <Modal.Body>
          <div className='d-flex justify-content-around row'>
            {patterns.map((p) => (
              <div onClick={() => handleSelect(p)} className='m-3' style={{ width: 120 }}>
                <PatternSquare pattern={p} />
              </div>
            ))}
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default SelectPattern
