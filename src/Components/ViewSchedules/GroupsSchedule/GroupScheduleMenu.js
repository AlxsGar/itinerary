import React, { useEffect, useState } from 'react'
import Card from '../../Elements/Card/Card'
import { doc, addDoc, setDoc, getDocs, getDoc, collection } from "@firebase/firestore"
import { firestore } from "../../Firebase/Firebase"

import classes from './GroupScheduleMenu.module.css'
import Button from '../../Elements/Button/Button'
import GroupItinerary from './GroupItinerary'

function GroupScheduleMenu(props) {
  const [groupData, setGroupData] = useState();
  const [submitted, setSubmitted] = useState(false);
  const careers = ["industrial", "mecatronica", "sistemas"]
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const [selectedGroup, setSelectedGroup] = useState();
  const [selectedCareer, setSelectedCareer] = useState("industrial");
  const [selectedSemester, setSelectedSemester] = useState("2");

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

  const obtainGroupSchedule = (e) => {
    //const obtainedGroupInfo = groupData.obj[selectedCareer].obj[selectedSemester];
    const obtainedGroupInfo = groupData[selectedCareer]['semester'+selectedSemester];
    setSelectedGroup(obtainedGroupInfo)
    setSubmitted(true)
  }

  return (
    <Card className={classes.groupMenu}>
      <div className={classes.selectionForm}>
        <label>Seleccione Grupo</label>
        <select onChange={handleCareerchange}>
          {careers.map(career => (
            <option key={career} value={career}>{"Ingenieria " + career}</option>
          ))}
        </select>
      </div>

      <div className={classes.selectionForm}>
        <label>Seleccione Semestre</label>
        <select onChange={handleSemesterChange}>
          {
            semesters.map(semester => (
              semester % 2 === 0 ? <option key={semester} value={semester}>{"Semestre " + semester}</option> : null
            ))
          }
        </select>
      </div>

      <Button onClick={obtainGroupSchedule}>Buscar Itinerario</Button>

      {submitted && <GroupItinerary groupInformation={selectedGroup} name={"Ingenieria " + selectedCareer + " Semestre " + selectedSemester}/>}

    </Card>
  )
}

export default GroupScheduleMenu