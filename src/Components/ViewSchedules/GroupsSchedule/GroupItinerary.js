import React, {useState, useEffect} from 'react'
import classes from './GroupItinerary.module.css'

function GroupItinerary(props) {
    const [itinerary, setItinerary] = useState(props.groupInformation)

    const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    let initialHour = 7;


    return (
        <React.Fragment>
            <h1>{props.name}</h1>
            <div className={classes.itineraryModule}>
                <table className={classes.table}>
                    <tbody>
                        <tr>
                            <th className={classes.th}>Hora</th>
                            <th className={classes.th}>Lunes</th>
                            <th className={classes.th}>Martes</th>
                            <th className={classes.th}>Miercoles</th>
                            <th className={classes.th}>Jueves</th>
                            <th className={classes.th}>Viernes</th>
                        </tr>
                        {console.log(props.groupInformation)}
                        {
                            testArr.map(hour => (
                                <tr>
                                    <td>{initialHour + hour}:00</td>
                                    <td><h3 style={props.groupInformation.itinerary.monday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.monday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.tuesday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.tuesday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.wednesday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.wednesday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.thursday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.thursday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.friday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.friday[hour] === 'Available' ? 'Disponible' : 'No Disponible'}</h3></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div>
                    <table>
                        <tbody>
                            <tr>
                                <th>Materia</th>
                                <th>Docente</th>
                                <th>Horas</th>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </React.Fragment>
    )
}

export default GroupItinerary