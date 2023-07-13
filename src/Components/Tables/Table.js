import React, { useEffect, useState } from 'react'

import classes from './Table.module.css'

import Card from '../Elements/Card/Card'
import Button from '../Elements/Button/Button';

function Table(props) {

    const [itinerary, setItinerary] = useState(props.data.itinerary)

    useEffect(() => {
        setItinerary(props.data.itinerary)
    }, [props.data.itinerary])

    let initialHour = 7;
    const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    let newMonday = [...itinerary.monday];
    let newTuesday = [...itinerary.tuesday];
    let newWednesday = [...itinerary.wednesday];
    let newThursday = [...itinerary.thursday];
    let newFriday = [...itinerary.friday];

    const handleAvailability = (val) => {
        let values = val.split(',');
        let resetSchedule;

        if (values[0] === 'monday') {
            newMonday[values[1]] = newMonday[values[1]] === 'Available' ? 'Unavailable' : 'Available';
        }
        if (values[0] === 'tuesday') {
            newTuesday[values[1]] = newTuesday[values[1]] === 'Available' ? 'Unavailable' : 'Available';
        }
        if (values[0] === 'wednesday') {
            newWednesday[values[1]] = newWednesday[values[1]] === 'Available' ? 'Unavailable' : 'Available';
        }
        if (values[0] === 'thursday') {
            newThursday[values[1]] = newThursday[values[1]] === 'Available' ? 'Unavailable' : 'Available';
        }
        if (values[0] === 'friday') {
            newFriday[values[1]] = newFriday[values[1]] === 'Available' ? 'Unavailable' : 'Available';
        }

        resetSchedule = {
            monday: [...newMonday],
            tuesday: [...newTuesday],
            wednesday: [...newWednesday],
            thursday: [...newThursday],
            friday: [...newFriday]
        };
        setItinerary(resetSchedule);
    }

    const handleColumn = (val) => {
        let resetSchedule;
        let availability;

        if (val === 'monday') {
            availability = newMonday[0] === 'Available' ? 'Unavailable' : 'Available';
            newMonday.map((hour, index) => (
                newMonday[index] = availability
            ))
        }
        if (val === 'tuesday') {
            availability = newTuesday[0] === 'Available' ? 'Unavailable' : 'Available';
            newTuesday.map((hour, index) => (
                newTuesday[index] = availability
            ))
        }
        if (val === 'wednesday') {
            availability = newWednesday[0] === 'Available' ? 'Unavailable' : 'Available';
            newWednesday.map((hour, index) => (
                newWednesday[index] = availability
            ))
        }
        if (val === 'thursday') {
            availability = newThursday[0] === 'Available' ? 'Unavailable' : 'Available';
            newThursday.map((hour, index) => (
                newThursday[index] = availability
            ))
        }
        if (val === 'friday') {
            availability = newFriday[0] === 'Available' ? 'Unavailable' : 'Available';
            newFriday.map((hour, index) => (
                newFriday[index] = availability
            ))
        }

        resetSchedule = {
            monday: [...newMonday],
            tuesday: [...newTuesday],
            wednesday: [...newWednesday],
            thursday: [...newThursday],
            friday: [...newFriday]
        }

        setItinerary(resetSchedule)
    }

    const handleRow = (val) => {
        let resetSchedule;
        let availability = newMonday[val] === 'Available' ? 'Unavailable' : 'Available';

        newMonday[val] = availability;
        newTuesday[val] = availability;
        newWednesday[val] = availability;
        newThursday[val] = availability;
        newFriday[val] = availability;

        resetSchedule = {
            monday: [...newMonday],
            tuesday: [...newTuesday],
            wednesday: [...newWednesday],
            thursday: [...newThursday],
            friday: [...newFriday]
        }

        setItinerary(resetSchedule)
    }

    const handleSave = () => {
        props.onClick(itinerary)
    }

    return (
        <React.Fragment>
            <Card className={classes.tableSection}>
                <h1>{props.data.name}</h1>
                <table className={classes.table}>

                    <tbody>
                        <tr>
                            <th>Hora</th>
                            <th onClick={() => handleColumn('monday')}>Lunes</th>
                            <th onClick={() => handleColumn('tuesday')}>Martes</th>
                            <th onClick={() => handleColumn('wednesday')}>Miercoles</th>
                            <th onClick={() => handleColumn('thursday')}>Jueves</th>
                            <th onClick={() => handleColumn('friday')}>Viernes</th>
                        </tr>
                        {
                            testArr.map(hour => (
                                <tr>
                                    <td onClick={() => handleRow(hour)}>{initialHour + hour}:00</td>
                                    <td><button style={itinerary.monday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }} onClick={() => handleAvailability('monday,' + hour)}>{itinerary.monday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</button></td>
                                    <td><button style={itinerary.tuesday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }} onClick={() => handleAvailability('tuesday,' + hour)}>{itinerary.tuesday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</button></td>
                                    <td><button style={itinerary.wednesday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }} onClick={() => handleAvailability('wednesday,' + hour)}>{itinerary.wednesday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</button></td>
                                    <td><button style={itinerary.thursday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }} onClick={() => handleAvailability('thursday,' + hour)}>{itinerary.thursday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</button></td>
                                    <td><button style={itinerary.friday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }} onClick={() => handleAvailability('friday,' + hour)}>{itinerary.friday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Button onClick={handleSave}>Guardar</Button>
            </Card>
        </React.Fragment>
    )
}

export default Table