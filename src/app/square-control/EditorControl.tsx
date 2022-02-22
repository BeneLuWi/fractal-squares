import React, { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap'
import FancyModal from '../components/FancyModal'
import SquareEditor from '../square-editor/SquareEditor'

type EditorControlProps = {}

const EditorControl: FunctionComponent<EditorControlProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/
  const [show, setShow] = useState(false)

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/
  const toggleShow = () => setShow(!show)

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <>
      <Button variant='dark' className='rounded-circle' onClick={toggleShow}>
        <i className='bi bi-back' />
      </Button>
      <FancyModal show={show} close={toggleShow}>
        <div className='d-flex justify-content-around p-3' style={{ width: 300 }}>
          <SquareEditor />
        </div>
      </FancyModal>
    </>
  )
}

export default EditorControl
