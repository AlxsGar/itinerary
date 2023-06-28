import React from 'react'
import Card from '../Card/Card'

import classes from './Popup.module.css'

function Popup(props) {
  return (
    <div className={`${classes.popup} ${props.className}`}>
      <Card>
        <div className={classes.header}><h2>Agregar Maestro</h2></div>
        {props.children}
      </Card>
    </div>
  )
}

export default Popup