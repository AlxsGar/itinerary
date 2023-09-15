import React, { useContext, useState, useEffect } from 'react'
import AuthContext from '../Auth/auth-context'
import Button from '../Elements/Button/Button'
import Card from '../Elements/Card/Card'


import { firestore } from "../Firebase/Firebase"
import { doc, setDoc, getDocs, getDoc, collection } from "@firebase/firestore"

import classes from './Administration.module.css'

function Administration() {

    const authCtx = useContext(AuthContext)
    const [isStarted, setIsStarted] = useState(false);


    let date = new Date();
    let cycle = date.getMonth() <= 6 ? 2 : 1;
    cycle = 2;
    let currentDate = date.getFullYear() + '-' + cycle;

    useEffect(() => {
        checkCycle();
    });

    async function checkCycle() {
        const docRef = doc(collection(firestore, "groupCycles"), `${currentDate}`)
        const retrievedGroup = await getDoc(docRef);


        if (retrievedGroup.exists()) {
            //let groupData = retrievedGroup.data()
            setIsStarted(true)
        } else {
            console.log("It doesnt exist")
        }
    }

    async function handleNewCycle(e) {
        e.preventDefault();

        // Set group cycle

        let newSubjectList = [];
        let sistemas = {
            semester2: { subjects: [], itinerary: {} },
            semester4: { subjects: [], itinerary: {} },
            semester6: { subjects: [], itinerary: {} },
            semester8: { subjects: [], itinerary: {} }
        };
        let mecatronica = {
            semester2: { subjects: [], itinerary: {} },
            semester4: { subjects: [], itinerary: {} },
            semester6: { subjects: [], itinerary: {} },
            semester8: { subjects: [], itinerary: {} }
        };
        let industrial = {
            semester2: { subjects: [], itinerary: {} },
            semester4: { subjects: [], itinerary: {} },
            semester6: { subjects: [], itinerary: {} },
            semester8: { subjects: [], itinerary: {} }
        };

        let date = new Date();
        let cycle = date.getMonth() <= 6 ? 2 : 1;
        cycle = 2;
        let yearCycle = date.getFullYear() + '-' + cycle;

        const obtainInfo = await getDocs(collection(firestore, 'subjects'));
        obtainInfo.forEach((doc) => {

            if (cycle === 2) {
                let newSubjectCycle = {
                    teacher: '',
                }
                if (doc.data().semester % 2 === 0) {
                    Object.assign(newSubjectCycle, doc.data())
                    if (doc.data().career === 'Ing. en Sistemas') {
                        sistemas['semester' + doc.data().semester].subjects.push(newSubjectCycle)
                        sistemas['semester' + doc.data().semester].itinerary = {
                            monday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            tuesday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            wednesday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            thursday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            friday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available']
                        }
                    }
                    if (doc.data().career === 'Ing. Industrial') {
                        industrial['semester' + doc.data().semester].subjects.push(newSubjectCycle)
                        industrial['semester' + doc.data().semester].itinerary = {
                            monday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            tuesday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            wednesday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            thursday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            friday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available']
                        }
                    }
                    if (doc.data().career === 'Ing. Mecatronica') {
                        mecatronica['semester' + doc.data().semester].subjects.push(newSubjectCycle)
                        mecatronica['semester' + doc.data().semester].itinerary = {
                            monday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            tuesday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            wednesday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            thursday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available'],
                            friday: ['Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available', 'Available']
                        }
                    }
                }
            } else {
                let newSubjectCycle = {
                    teacher: '',
                }
                if (doc.data().semester % 2 !== 0) {
                    Object.assign(newSubjectCycle, doc.data())
                    newSubjectList.push(newSubjectCycle)
                }
            }
        })

        let groupDivide = {
            yearCycle: yearCycle,
            sistemas: sistemas,
            industrial: industrial,
            mecatronica: mecatronica,
        }

        setIsStarted(true)

        try {
            setDoc(doc(firestore, "groupCycles", `${yearCycle}`), groupDivide);
        } catch (e) {
            console.log(e);
        }

        // Set subject cycle

        let subjectList = []

        const obtainSubjects = await getDocs(collection(firestore, 'subjects'));
        obtainSubjects.forEach(doc => {
            if (cycle === 2) {
                if (doc.data().semester % 2 === 0) {
                    let newSubjectCycle = {
                        availability: true,
                        teacher: '',
                    }
                    Object.assign(newSubjectCycle, doc.data())
                    subjectList.push(newSubjectCycle)
                }
            } else {
                if (doc.data().semester % 2 !== 0) {
                    let newSubjectCycle = {
                        availability: true,
                        teacher: '',
                    }
                    Object.assign(newSubjectCycle, doc.data())
                    subjectList.push(newSubjectCycle)
                }
            }
        })

        let subjectCycleList = {
            subjects: subjectList,
        }

        try {
            setDoc(doc(firestore, "subjectCycles", `${yearCycle}`), subjectCycleList);
        } catch (e) {
            console.log(e);
        }

        // Set teacher cylce

        let teacherList = [];

        const obtainTeachers = await getDocs(collection(firestore, 'teachers'));
        obtainTeachers.forEach(doc => {
            let newTeacherCycle = {
                availability: true,
            }
            Object.assign(newTeacherCycle, doc.data())
            teacherList.push(newTeacherCycle)
        })

        let teacherCycleList = {
            teachers: teacherList,
        }

        try {
            setDoc(doc(firestore, "teacherCycles", `${yearCycle}`), teacherCycleList);
        } catch (e) {
            console.log(e);
        }

    }

    const teacherHandler = () => {
        authCtx.onSelectPage(4);
    }

    const registryHandler = () => {
        authCtx.onSelectPage(5);
    }

    const handleTeacherSchedule = (value) => {
        authCtx.onSelectPage(value);
    }

    return (
        <React.Fragment>
            {!isStarted &&
                <Card className={classes.admin}>
                    <h1>Inicie ciclo escolar para administrar</h1>
                    <Button onClick={handleNewCycle}>Iniciar</Button>
                </Card>
            }
            <Card className={classes.admin}>
                <h1>Registro</h1>
                <p>Registra y/o edita la información de los maestros y materias.</p>
                <Button onClick={registryHandler}>Ir a registro</Button>
            </Card>
            {isStarted &&
                <div>
                    <Card className={classes.admin}>
                        <h1>Administración de maestros</h1>
                        <p>
                            Asigna las materias a los maestros,
                            ve sus horarios o edita la información.
                        </p>
                        <Button onClick={teacherHandler}>Administra Maestros</Button>
                    </Card>
                    <Card className={classes.admin}>
                        <h1>Horarios de maestros</h1>
                        <Button onClick={() => handleTeacherSchedule(6)}>Ver</Button>
                    </Card>
                    <Card className={classes.admin}>
                        <h1>Horarios de grupos</h1>
                        <Button onClick={() => handleTeacherSchedule(7)}>Ver</Button>
                    </Card>
                </div>
            }
        </React.Fragment>
    )
}

export default Administration