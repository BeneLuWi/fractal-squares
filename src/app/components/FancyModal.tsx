import React, { CSSProperties, FunctionComponent, useRef } from 'react'

type FancyModalProps = {
  show: boolean
  close: VoidFunction
  style?: CSSProperties
}

const FancyModal: FunctionComponent<FancyModalProps> = ({ show, close, style, children }) => {
  /*******************************************************************************************************************
   *
   *  Hooks
   *
   *******************************************************************************************************************/

  const modalRef = useRef(null)

  /*******************************************************************************************************************
   *
   *  Functions
   *
   *******************************************************************************************************************/

  const handleClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    event.target === modalRef.current && close()

  /*******************************************************************************************************************
   *
   *  Rendering
   *
   *******************************************************************************************************************/

  if (!show) return <></>

  return (
    <div
      ref={modalRef}
      onClick={handleClick}
      className='position-absolute w-100 h-100 bg-dark bg-opacity-25 overflow-auto p-2'
      style={{ left: 0, top: 0 }}
    >
      <div style={{ bottom: '0', maxWidth: 450 }} className='position-relative bg-dark bg-opacity-75 rounded m-auto'>
        {children}
      </div>
    </div>
  )
}

export default FancyModal
