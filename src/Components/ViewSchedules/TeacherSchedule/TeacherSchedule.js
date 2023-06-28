import React from "react";

import classes from './TeacherSchedule.module.css'

import Card from "../../Elements/Card/Card";
import Table from '../../Tables/Table';

function TeacherSchedule() {
  return (
    <React.Fragment>
      <Card className={classes.teacherschedule}>
        TeacherSchedule
      </Card>
      <Table />
    </React.Fragment>
  );
}

export default TeacherSchedule;
