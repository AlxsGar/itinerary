import React, { useState } from 'react'
import Button from '../Elements/Button/Button'
import Card from '../Elements/Card/Card'
import AdminAdd from './AdminAdd';

import classes from './AdminTeacher.module.css'

import { firestore } from "../Firebase/Firebase";
import { doc, getDoc, getDocs, collection } from "@firebase/firestore"
import TeacherCard from './TeacherCard';


function AdminTeacher() {

    const [loaded, setLoaded] = useState(false)
    const [isAdding, setIsAdding] = useState(false);

    const [teachersList, setTeachersList] = useState([]);
    const [teachersInfo, setTeachersInfo] = useState([]);
    const [subjectsList, setSubjectsList] = useState([]);

    let date = new Date();
    let cycle = date.getMonth() <= 6 ? 2 : 1;
    cycle = 2;
    let currentDate = date.getFullYear() + '-' + cycle;

    async function fecthTeachers(e) {
        e.preventDefault();

        const querySnapshot = await getDocs(collection(firestore, "teachersClassesInfo"));
        setTeachersList([]);
        querySnapshot.forEach((doc) => {
            setTeachersInfo(current => [...current, doc.data()]);
        });

        setLoaded(true);
    }

    async function addHandler(e) {

        e.preventDefault();

        const teachersRef = doc(collection(firestore, "teacherCycles"), `${currentDate}`)
        const retrievedTeachers = await getDoc(teachersRef);

        setTeachersList(retrievedTeachers.data().teachers)

        //Obtain subjects

        const subjectsRef = doc(collection(firestore, "subjectCycles"), `${currentDate}`)
        const retrievedSubjects = await getDoc(subjectsRef);

        setSubjectsList(retrievedSubjects.data().subjects)

        if (isAdding) {
            setIsAdding(false)
        } else {
            setIsAdding(true)
        }

    }

    return (
        <React.Fragment>
            <Card className={classes.adminTeacher}>
                <h1>Lista de Maestros</h1>
                <Button onClick={addHandler}>Asignar Materias</Button>
                <Button onClick={fecthTeachers}>Ver Lista</Button>
                <section className={classes.buttonSection}>
                    {isAdding && <AdminAdd subjects={subjectsList} teachers={teachersList} />}
                </section>
                {loaded && <Card className={classes.adminTeacher}>
                    {teachersInfo.map((teacher) => (
                        <TeacherCard key={teacher.name} name={teacher.name} subjects={teacher.subjects} />
                    ))}
                </Card>}
            </Card>
        </React.Fragment>
    )
}

export default AdminTeacher