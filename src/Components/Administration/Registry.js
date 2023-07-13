import React, { useEffect, useState } from 'react'
import Card from '../Elements/Card/Card'

import { firestore } from "../Firebase/Firebase";
import { getDocs, collection } from "@firebase/firestore"

import classes from './Registry.module.css'

import { SimpleTeacherCard } from './TeacherCard';
import RegistryForm from './RegistryForm';

function Registry() {

    const [teachersList, setTeachersList] = useState([]);
    const [isSet, setIsSet] = useState(false)

    useEffect(() => {
        if (!isSet) {
            fetchTeacher();
        }
        setIsSet(true)
    }, [isSet])

    async function fetchTeacher() {
        const querySnapshot = await getDocs(collection(firestore, "teachers"))

        querySnapshot.forEach((doc) => {
            setTeachersList(current => [...current, doc.data()]);
        });
    }

    return (
        <React.Fragment>
            <Card className={classes.registryCard}>
                <h1>Ingresar nuevo maestro</h1>
                <RegistryForm/>
            </Card>
            <Card className={classes.registryCard}>
                <Card className={classes.adminTeacher}>
                    {teachersList.map((teacher) => (
                        <SimpleTeacherCard key={teacher.name} name={teacher.name} />
                    ))}
                </Card>
            </Card>
        </React.Fragment>
    )
}

export default Registry