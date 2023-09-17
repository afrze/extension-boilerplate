import { createRoot } from 'react-dom/client'
import React from 'react'
import './option.css'

const Option = () => {
  return (
    <>
      <div>Options page for react browser extension.</div>
      <img src='icon.png' alt='icon'/>
    </>
  )
}

// Creating root Element
const root = document.createElement('div')
document.body.appendChild(root)
const rootElement = createRoot(root)
rootElement.render(<Option></Option>)
