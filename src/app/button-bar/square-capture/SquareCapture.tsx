import React, { FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'

type SquareCaptureProps = {}

const SquareCapture: FunctionComponent<SquareCaptureProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/
  const exportAsImage = async (imageFileName: string = 'square') => {
    // downloadImage(image, imageFileName)
  }
  const downloadImage = (blob: string, fileName: string) => {
    const fakeLink = window.document.createElement('a')
    fakeLink.className = 'd-none'
    fakeLink.download = fileName

    fakeLink.href = blob

    document.body.appendChild(fakeLink)
    fakeLink.click()
    document.body.removeChild(fakeLink)

    fakeLink.remove()
  }

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  return (
    <span className='m-2'>
      <Button variant='dark' className='rounded-pill' onClick={() => exportAsImage()}>
        <i className='bi bi-file-image' /> &nbsp; Save as Image
      </Button>
    </span>
  )
}

export default SquareCapture
