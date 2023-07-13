import React, { useState, useEffect } from 'react'
import { firestore } from "../../Firebase/Firebase";
import { doc, updateDoc, getDocs, collection } from "@firebase/firestore"

import Card from '../../Elements/Card/Card'
import TeacherSchedule from './TeacherSchedule.js'

import classes from './TeachersMenu.module.css'
import TeacherCard from '../../Administration/TeacherCard';

function TeachersMenu() {

    const [teachersInfo, setTeachersInfo] = useState([]);
    const [isSet, setIsSet] = useState(false)
    const [loaded, setLoaded] = useState(false)
    const [teacherSelected, setTeacherSelected] = useState(false)
    const [retrievedTeacherInfo, setRetrievedTeacherInfo] = useState()

    useEffect(() => {
        if (!isSet) {
            fetchTeachers();
        }
        setIsSet(true)
    }, [isSet])

    async function fetchTeachers() {
        setTeachersInfo([])
        const querySnapshot = await getDocs(collection(firestore, "teachersClassesInfo"));

        querySnapshot.forEach((doc) => {
            let info = {
                id: doc.id,
            }

            Object.assign(info, doc.data())

            setTeachersInfo(current => [...current, info]);
        });

        setLoaded(true);
    }

    const ViewInfoHandler = (selectedTeacher) => {
        setTeacherSelected(true)

        let infoObtained;

        teachersInfo.map(data => {
            if (data.id === selectedTeacher) {
                return infoObtained = data;
            }
            return infoObtained
        })
        setRetrievedTeacherInfo(infoObtained)
    }

    async function updateHandler(info) {
        setTeacherSelected(false)

        const updateInfo = doc(firestore, "teachersClassesInfo", retrievedTeacherInfo.id)
        await updateDoc(updateInfo, {
            itinerary: {...info}
        })

        fetchTeachers();
    }

    return (
        <React.Fragment>
            <Card className={classes.teachersMenu}>
                <h1>Selecciona maestro</h1>
                {loaded && <Card className={classes.teachersMenu}>
                    {teachersInfo.map((teacher) => (
                        <TeacherCard key={teacher.id} id={teacher.id} name={teacher.name} subjects={teacher.subjects} onClick={ViewInfoHandler} />
                    ))}
                </Card>}
            </Card>
            {teacherSelected && <TeacherSchedule teacherInfo={retrievedTeacherInfo} onClick={updateHandler}/>}
        </React.Fragment>
    )
}

export default TeachersMenu