import React, { FunctionComponent, useState } from 'react'
import { Button } from 'react-bootstrap'
import FancyModal from '../../components/FancyModal'
import ResetSquare from '../ResetSquare'

type DataControlProps = {}

const DataControl: FunctionComponent<DataControlProps> = ({}) => {
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
          <ResetSquare />
          <ResetSquare />
        </div>
      </FancyModal>
    </>
  )
}

export default DataControl
