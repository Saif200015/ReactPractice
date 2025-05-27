import React, { useState } from 'react'
import './App.css'

const ResponsiveMenu = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        className=''
        onClick={() => setOpen(!open)} >
        {open ? 'Close' : 'Menu'}
      </button>
      <ul className='menu' style={{ left: open ? '0' : '-100%' }}>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Gallery</li>
        <li>Career</li>
      </ul>
    </>
  )
}

export default ResponsiveMenu
