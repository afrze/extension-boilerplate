import { createRoot } from 'react-dom/client'
import React from 'react'
import './popup.css'

const Popup = () => {
  return (
    <>
      <div>React boilerplate for Browser extension.</div>
    </>
  )
}

// Creating root Element
const root = document.createElement('div')
document.body.appendChild(root)
const rootElement = createRoot(root)
rootElement.render(<Popup></Popup>)
