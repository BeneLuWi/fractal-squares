import React, { FunctionComponent, useRef, useState } from 'react'
import { Button } from 'react-bootstrap'
import FancyModal from '../../components/FancyModal'
import ResetSquare from '../ResetSquare'
import { GameType, useTree } from '../../tree/TreeProvider'
import PlainSquare from '../../square/PlainSquare'
import PlainTri from '../../square/PlainTri'

type DataControlProps = {}

const DataControl: FunctionComponent<DataControlProps> = () => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const [show, setShow] = useState(false)
  const treeRoot = useRef(null)
  const { gameType } = useTree()
  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const toggleShow = () => setShow(!show)

  const saveAsImg2 = () => {
    if (!treeRoot.current) return
    const svgData = new XMLSerializer().serializeToString(treeRoot.current)
    const canvas = document.createElement('canvas')
    const img_to_download = document.createElement('img')
    const dpx = window.devicePixelRatio || 1
    const width = 500 * dpx
    const height = gameType === GameType.SQUARE ? 500 * dpx : 430 * dpx
    img_to_download.src = 'data:image/svg+xml;base64,' + window.btoa(svgData)
    img_to_download.onload = function () {
      canvas.setAttribute('width', `${width}`)
      canvas.setAttribute('height', `${height}`)
      const context = canvas.getContext('2d')
      if (!context) return
      context.imageSmoothingEnabled = false

      context.drawImage(img_to_download, 0, 0, width, height)
      context.scale(dpx, dpx)

      const dataURL = canvas.toDataURL('image/png', 1.0)
      const a = document.createElement('a')
      a.download = 'fractal-square.png'
      a.href = dataURL
      a.click()
      //canvas.parentNode.removeChild(canvas);
    }
  }

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
          <span className='m-2'>
            <Button variant='dark' className='rounded-pill' onClick={saveAsImg2}>
              <i className='bi bi-file-image' /> &nbsp; Download as Image
            </Button>
          </span>
          <div className='w-50'>
            {gameType === GameType.SQUARE ? (
              <svg ref={treeRoot} viewBox='0 0 10 10' preserveAspectRatio='none'>
                <PlainSquare path={[]} />
              </svg>
            ) : (
              <svg ref={treeRoot} viewBox='0 0 100 86' preserveAspectRatio='none'>
                <PlainTri path={[]} />
              </svg>
            )}
          </div>
        </div>
      </FancyModal>
    </>
  )
}

export default DataControl
