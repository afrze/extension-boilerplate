import { createRoot } from 'react-dom/client'
import React from 'react'

const Option = () => {
  return (
    <>
      <div>Options page for react browser extension.</div>
    </>
  )
}

// Creating root Element
const root = document.createElement('div')
document.body.appendChild(root)
const rootElement = createRoot(root)
rootElement.render(<Option />)
