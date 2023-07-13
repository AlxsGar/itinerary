import React from 'react'

import classes from './TeacherCard.module.css'

function TeacherCard(props) {

    const handleClick = () => {
        props.onClick(props.id)
    }

    return (
        <React.Fragment>
            <div className={classes.teacherCard}>
                <h1>{props.name}</h1>
                <ul>
                    {props.subjects.map((subject, index) => {
                        return <ul key={index} className={classes.teacherItem}>{subject.subjectName}</ul>
                    })}
                </ul>

                <button onClick={handleClick}>Editar</button>
            </div>
        </React.Fragment>
    )
}

export const SimpleTeacherCard = (props) => {
    return (
        <React.Fragment>
            <div className={classes.teacherCard}>
                <h1>{props.name}</h1>
                <button onClick={props.onClick}>Editar</button>
            </div>
        </React.Fragment>
    )
}

export default TeacherCard;