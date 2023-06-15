import React from 'react'

import Navigation from './Navigation'

import classes from './Navbar.module.css'

function Navbar() {
  return (
    <header className={classes['navbar']}>
        <h1>UVAQ</h1>
        <Navigation/>
    </header>
  )
}

export default Navbar
