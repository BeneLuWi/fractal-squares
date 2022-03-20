import React, { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap'
import FancyModal from '../../components/FancyModal'
import ResetSquare from '../ResetSquare'
import SquareCapture from '../square-capture/SquareCapture'

type DataControlProps = {}

const DataControl: FunctionComponent<DataControlProps> = () => {
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
      <FancyModal show={show} close={() => setShow(false)}>
        <div className='d-flex justify-content-around p-3 flex-column align-items-center'>
          <ResetSquare />
          <SquareCapture />
        </div>
      </FancyModal>
    </>
  )
}

export default DataControl
