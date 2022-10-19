import React, { useState } from 'react'
import { createPortal } from 'react-dom'

const Jquery = () => {
  return (
    <>
      <script src="https://code.jquery.com/jquery-3.6.1.min.js"></script>
    </>
  )
}

const IFrame = ({ children, ...props }) => {
  const [contentRef, setContentRef] = useState(null)
  const bodyMountNode = contentRef?.contentWindow?.document?.body
  let headMountNode = contentRef?.contentWindow?.document?.head
  headMountNode= ""
  return (
    <iframe {...props} ref={setContentRef}>
      {headMountNode && createPortal(<Jquery/>, headMountNode)}
      {bodyMountNode && createPortal(children, bodyMountNode)}
    </iframe>
  )
}

export default IFrame
