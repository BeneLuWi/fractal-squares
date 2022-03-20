import React, { CSSProperties, FunctionComponent, useEffect, useRef } from 'react'
import { a, config, useTransition } from 'react-spring'

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

  const transitions = useTransition(show, {
    from: { transform: 'scale(0.9)', opacity: 0, top: 50 },
    enter: { transform: 'scale(1)', opacity: 1, top: 0 },
    leave: { transform: 'scale(0.9)', opacity: 0, top: -50 },
    config: config.gentle,
  })

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

  return transitions(
    (styles, item) =>
      item && (
        <a.div
          ref={modalRef}
          onClick={handleClick}
          className='position-absolute w-100 h-100 bg-dark bg-opacity-25 overflow-auto p-2'
          style={{ left: 0, top: 0, opacity: styles.opacity }}
        >
          <a.div
            style={{ ...styles, maxWidth: 450 }}
            className='position-relative bg-dark bg-opacity-75 rounded m-auto'
          >
            {children}
          </a.div>
        </a.div>
      )
  )
}

export default FancyModal
