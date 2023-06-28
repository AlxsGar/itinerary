import React from 'react'

import classes from './TeacherCard.module.css'

function TeacherCard(props) {

    return (
        <React.Fragment>
            <div className={classes.teacherCard}>
                <h1>{props.name}</h1>
                <ul>
                    {props.subjects.map((subject) => {
                        return <ul className={classes.teacherItem}>{subject.subjectName}</ul>
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}

export default TeacherCard