import React, { useState } from 'react'
import Button from '../Elements/Button/Button'
import Card from '../Elements/Card/Card'
import AdminAdd from './AdminAdd';

import classes from './AdminTeacher.module.css'

import { firestore } from "../Firebase/Firebase";
import { getDocs, collection } from "@firebase/firestore"
import TeacherCard from './TeacherCard';


function AdminTeacher() {

    const [loaded, setLoaded] = useState(false)
    const [isAdding, setIsAdding] = useState(false);

    const [teachersList, setTeachersList] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);

    async function fecthTeachers(e) {
        e.preventDefault();
        //const loadedTeachers = [];

        const querySnapshot = await getDocs(collection(firestore, "teachers"));
        setTeachersList([]);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setTeachersList(current => [...current, doc.data()]);
        });

        setLoaded(true);
    }

    async function addHandler(e) {

        e.preventDefault();

        const queryTeachers = await getDocs(collection(firestore, "teachers"));
        setTeachersList([]);
        queryTeachers.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setTeachersList(current => [...current, doc.data()]);
        });

        //console.log(teachersList)

        const querySnapshot = await getDocs(collection(firestore, "subjects"));
        setSubjectsList([]);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            setSubjectsList(current => [...current, doc.data()]);
        });

        setIsAdding(true)

    }

    return (
        <React.Fragment>
            <Card className={classes.adminTeacher}>
                <h1>Lista de Maestros</h1>
                <section className={classes.buttonSection}>
                    <Button onClick={addHandler}>+</Button>
                    {isAdding && <AdminAdd subjects={subjectsList} teachers={teachersList}/>}
                </section>
                <Button onClick={fecthTeachers}>Ver Lista</Button>
                {loaded && <Card className={classes.adminTeacher}>
                    {teachersList.map((teacher) => (
                        <TeacherCard key={teacher.name} name={teacher.name} subjects={teacher.subjects}/>
                    ))}
                </Card>}
            </Card>
        </React.Fragment>
    )
}

export default AdminTeacher