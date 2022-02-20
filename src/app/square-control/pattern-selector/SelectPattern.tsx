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
  const { setPattern, patterns } = useColor()

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
      <Button variant='dark' onClick={toggleSelector}>
        Next
      </Button>
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
