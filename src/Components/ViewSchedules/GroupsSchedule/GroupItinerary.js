import React, { useState } from 'react'
import Button from '../../Elements/Button/Button';
import classes from './GroupItinerary.module.css'

import { getDocs, collection } from "@firebase/firestore"
import { firestore } from "../../Firebase/Firebase"

function GroupItinerary(props) {
    const [itinerary, setItinerary] = useState(props.groupInformation)
    const [teachersInfo, setTeachersInfo] = useState([]);
    const [teacherList, setTeachersList] = useState([]);

    const testArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
    let initialHour = 7;

    let date = new Date();
    let cycle = date.getMonth() <= 6 ? 2 : 1;
    cycle = 2;
    let currentDate = date.getFullYear() + '-' + cycle;

    async function generateScheduleHandler(e) {
        e.preventDefault();

        const querySnapshot = await getDocs(collection(firestore, "teachersClassesInfo"));
        setTeachersInfo([]);
        querySnapshot.forEach((doc) => {
            setTeachersInfo(current => [...current, doc.data()]);
        });

        let selectedTeacher = [];

        teachersInfo.map(teacher => {
            teacher.subjects.map(teacherSubjects => {
                props.groupInformation.subjects.map(groupSubjects => {
                    if(parseInt(teacherSubjects.subjectId) === groupSubjects.id){
                        selectedTeacher.push(teacher)
                    }
                })
            })
        })

        setTeachersList([...new Set(selectedTeacher)]);

        generateSchedule(teacherList)
    }

    const generateSchedule = (teachers) => {
        
        props.groupInformation.subjects.map(subject => {
            teachers.map(teacher => {
                teacher.subjects.map(teacherSubject => {
                    if(subject.name === teacherSubject.subjectName){
                        let assigned = false;
                        let availableSpace = true;
                        let i = 0;
                        if(subject.hours === 2){
                            do{
                                if(teacher.itinerary.tuesday[i] === "Available" && props.groupInformation.itinerary.tuesday[i] === "Available"){
                                    teacher.itinerary.tuesday[i] = subject.name;
                                    props.groupInformation.itinerary.tuesday[i] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.thursday[i] === "Available" && props.groupInformation.itinerary.thursday[i] === "Available"){
                                    teacher.itinerary.thursday[i] = subject.name;
                                    props.groupInformation.itinerary.thursday[i] = subject.name;
                                    assigned = true;
                                }
                                i++;
                            }while(i < 8 && !assigned)
                        }else if(subject.hours === 3){
                            do{
                                if(teacher.itinerary.monday[i] === "Available" && props.groupInformation.itinerary.monday[i] === "Available"){
                                    teacher.itinerary.monday[i] = subject.name;
                                    props.groupInformation.itinerary.monday[i] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.wednesday[i] === "Available" && props.groupInformation.itinerary.wednesday[i] === "Available"){
                                    teacher.itinerary.wednesday[i] = subject.name;
                                    props.groupInformation.itinerary.wednesday[i] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.friday[i] === "Available" && props.groupInformation.itinerary.friday[i] === "Available"){
                                    teacher.itinerary.friday[i] = subject.name;
                                    props.groupInformation.itinerary.friday[i] = subject.name;
                                    assigned = true;
                                }
                                i++;
                            }while(i < 8 && !assigned)
                        }else if(subject.hours === 4){
                            do{
                                if(teacher.itinerary.tuesday[i] === "Available" && props.groupInformation.itinerary.tuesday[i] === "Available"){
                                    teacher.itinerary.tuesday[i] = subject.name;
                                    teacher.itinerary.tuesday[i+1] = subject.name;
                                    props.groupInformation.itinerary.tuesday[i] = subject.name;
                                    props.groupInformation.itinerary.tuesday[i+1] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.thursday[i] === "Available" && props.groupInformation.itinerary.thursday[i] === "Available"){
                                    teacher.itinerary.thursday[i] = subject.name;
                                    teacher.itinerary.thursday[i+1] = subject.name;
                                    props.groupInformation.itinerary.thursday[i] = subject.name;
                                    props.groupInformation.itinerary.thursday[i+1] = subject.name;
                                    assigned = true;
                                }
                                i++;
                            }while(i < 8 && !assigned)
                        }else if(subject.hours === 5){
                            do{
                                if(teacher.itinerary.monday[i] === "Available" && props.groupInformation.itinerary.monday[i] === "Available"){
                                    teacher.itinerary.monday[i] = subject.name;
                                    teacher.itinerary.monday[i+1] = subject.name;
                                    props.groupInformation.itinerary.monday[i] = subject.name;
                                    props.groupInformation.itinerary.monday[i+1] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.wednesday[i] === "Available" && props.groupInformation.itinerary.wednesday[i] === "Available"){
                                    teacher.itinerary.wednesday[i] = subject.name;
                                    teacher.itinerary.wednesday[i+1] = subject.name;
                                    props.groupInformation.itinerary.wednesday[i] = subject.name;
                                    props.groupInformation.itinerary.wednesday[i+1] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.friday[i] === "Available" && props.groupInformation.itinerary.friday[i] === "Available"){
                                    teacher.itinerary.friday[i] = subject.name;
                                    props.groupInformation.itinerary.friday[i] = subject.name;
                                    assigned = true;
                                }
                                i++;
                            }while(i < 8 && !assigned)
                        }else if(subject.hours === 6){
                            do{
                                if(teacher.itinerary.monday[i] === "Available" && props.groupInformation.itinerary.monday[i] === "Available"){
                                    teacher.itinerary.monday[i] = subject.name;
                                    teacher.itinerary.monday[i+1] = subject.name;
                                    props.groupInformation.itinerary.monday[i] = subject.name;
                                    props.groupInformation.itinerary.monday[i+1] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.wednesday[i] === "Available" && props.groupInformation.itinerary.wednesday[i] === "Available"){
                                    teacher.itinerary.wednesday[i] = subject.name;
                                    teacher.itinerary.wednesday[i+1] = subject.name;
                                    props.groupInformation.itinerary.wednesday[i] = subject.name;
                                    props.groupInformation.itinerary.wednesday[i+1] = subject.name;
                                    assigned = true;
                                }
                                if(teacher.itinerary.friday[i] === "Available" && props.groupInformation.itinerary.friday[i] === "Available"){
                                    teacher.itinerary.friday[i] = subject.name;
                                    props.groupInformation.itinerary.friday[i] = subject.name;
                                    assigned = true;
                                }
                                i++;
                            }while(i < 8 && !assigned)
                        }
                    }
                })
            })
        })
        console.log(teachers);
        console.log(props.groupInformation.itinerary)
    }

    const generateAlgorithm = (classHours, groupSchedule, teacherSchedule) => {
        let remainingHours = classHours;
        let days = ["monday", "tuesday", "wednesday", "thursday", "friday"];

        do{
            if(classHours === 1){

            }else{
                if(classHours % 2 === 0){
                    if(classHours > 2){
                        
                    }else{

                    }
                }else if(classHours % 3 === 0){

                }else if(classHours % 5 === 0){

                }
            }
        }while(remainingHours > 0)
    }

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

                        {
                            testArr.map(hour => (
                                <tr>
                                    <td>{initialHour + hour}:00</td>
                                    <td><h3 style={props.groupInformation.itinerary.monday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.monday[hour] === 'Available' ? 'Disponible' : props.groupInformation.itinerary.monday[hour]}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.tuesday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.tuesday[hour] === 'Available' ? 'Disponible' : props.groupInformation.itinerary.tuesday[hour]}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.wednesday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.wednesday[hour] === 'Available' ? 'Disponible' : props.groupInformation.itinerary.wednesday[hour]}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.thursday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.thursday[hour] === 'Available' ? 'Disponible' : props.groupInformation.itinerary.thursday[hour]}</h3></td>
                                    <td><h3 style={props.groupInformation.itinerary.friday[hour] === 'Available' ? { color: 'green', borderColor: 'green' } : { color: 'red', borderColor: 'red' }}>{props.groupInformation.itinerary.friday[hour] === 'Available' ? 'Disponible' : props.groupInformation.itinerary.friday[hour]}</h3></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div className={classes.infoSection}>
                <table>
                    <tbody>
                        <tr>
                            <th>Materia</th>
                            <th>Docente</th>
                            <th>Horas</th>
                        </tr>
                        {
                            props.semesterSubjects.map(subject => (
                                <tr>
                                    <td>{subject.name}</td>
                                    <td>{subject.teacher}</td>
                                    <td>{subject.hours}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <Button onClick={generateScheduleHandler}>Generar Horario</Button>
            </div>
        </React.Fragment>
    )
}

export default GroupItinerary