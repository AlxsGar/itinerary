import React, { useState } from 'react'
import Button from '../Elements/Button/Button'

import classes from './AdminAdd.module.css'

import { firestore } from "../Firebase/Firebase"
import { addDoc, collection } from "@firebase/firestore"
import Card from '../Elements/Card/Card'

function AdminAdd(props) {

  const [subjectList, setSubjectList] = useState([
    { subjectId: 0, subjectName: '' }
  ])
  const orderedSubjects = [].concat(props.subjects).sort((a, b) => a.id > b.id ? 1 : -1);

  const [teacherName, setTeacherName] = useState('')

  const ref = collection(firestore, "teachersClassesInfo")

  const handleChange = (event, index) => {
    let values = event.target.value.split(',')

    let data = [...subjectList];
    data[index]['subjectId'] = values[0];
    data[index]['subjectName'] = values[1];
  }

  const handleNameChange = (event) => {
    setTeacherName(event.target.value)
  }

  const handleAdd = (e) => {
    e.preventDefault();

    let object = {
      subjectId: 0,
      subjectName: ''
    }

    setSubjectList([...subjectList, object])
  }

  const addElement = (e) => {
    e.preventDefault();

    let data = {
      name: teacherName,
      subjects: subjectList,
      itinerary: [
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
        'Available', 'Available', 'Available', 'Available', 'Available',
      ]
    }

    try {
      addDoc(ref, data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <React.Fragment>
      <Card className={classes.adminAdd}>
        <form onSubmit={handleAdd}>
          {/* <div className={classes.control}>
            <label>Nombre:</label>
            <input onChange={handleNameChange}/>
          </div> */}
          <div className={classes.control}>
            <label>Maestro:</label>
            <select name='name' onChange={handleNameChange}>
              {props.teachers.map(teacher => (
                <option key={teacher.name} value={teacher.name}>{teacher.name}</option>
              ))}
            </select>
          </div>
          {subjectList.map((form, index) => {
            return (
              <div key={index} className={classes.control}>
                <label>Materia:</label>
                <select name='subject' onChange={event => handleChange(event, index)}>
                  {orderedSubjects.map(subject => (
                    <option key={subject.id} value={`${subject.id},${subject.name}`}>{subject.career} {subject.semester} - {subject.name}</option>
                  ))}
                </select>
              </div>
            )
          })}
          <div className={classes.control}>
            <button onClick={handleAdd}>+</button>
          </div>
          <Button onClick={addElement}>Agregar</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default AdminAdd