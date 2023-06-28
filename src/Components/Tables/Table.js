import React from 'react'

import classes from './Table.module.css'

import Card from '../Elements/Card/Card'

function Table() {
  return (
    <Card className={classes.tableSection}>
        <h1>Table</h1>
        <table className={classes.table}>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Gender</th>
            </tr>
            <tr>
                <td>Robert</td>
                <td>23</td>
                <td>Male</td>
            </tr>
            <tr>
                <td>Margot</td>
                <td>25</td>
                <td>Female</td>
            </tr>
        </table>
    </Card>
  )
}

export default Table