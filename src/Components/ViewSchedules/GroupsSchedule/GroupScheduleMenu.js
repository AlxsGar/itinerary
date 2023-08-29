import React, { useEffect, useState } from 'react'
import Card from '../../Elements/Card/Card'
import { doc, addDoc, setDoc, getDocs, getDoc, collection } from "@firebase/firestore"
import { firestore } from "../../Firebase/Firebase"

import classes from './GroupScheduleMenu.module.css'

function GroupScheduleMenu(props) {
  const [groupData, setGroupData] = useState();
  const careers = ["industrial", "mecatrocina", "sistemas"]
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectedGroup, setSelectedGroup] = useState();
  const [selectedCareer, setSelectedCareer] = useState();
  const [selectedSemester, setSelectedSemester] = useState();

  let currentCycle;

  useEffect(() => {
    checkCycle();
  }, []);

  async function checkCycle() {
    let date = new Date();
    let cycle = date.getMonth() <= 6 ? 2 : 1;
    cycle = 2;
    let currentDate = date.getFullYear() + '-' + cycle;
    const docRef = doc(collection(firestore, "groupCycles"), `${currentDate}`)
    const retrievedGroup = await getDoc(docRef);

    currentCycle = cycle;


    if (retrievedGroup.exists()) {
      setGroupData(retrievedGroup.data())
    } else {
      console.log("It doesnt exist")
    }
  }

  const handleCareerchange = (e) => {
    setSelectedCareer(e.target.value)
  }

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value)
  }

  return (
    <Card className={classes.groupMenu}>
      <label>Seleccione Grupo</label>
      <select onChange={handleCareerchange}>
        {careers.map(career => (
          <option value={career}>{"Ingenieria "+career}</option>
        ))}
      </select>

      <label>Seleccione Semestre</label>
      <select onChange={handleSemesterChange}>
        {
          semesters.map(semester => (
            semester % 2 === 0 ? <option value={semester}>{"Semestre "+semester}</option> : null
          ))
        }
      </select>

    </Card>
  )
}

export default GroupScheduleMenu