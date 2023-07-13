import React from "react";
import Table from '../../Tables/Table';

function TeacherSchedule(props) {
  const handleSave = (info) => {
    props.onClick(info)
  }
  return (
    <React.Fragment>
      <Table data={props.teacherInfo} onClick={handleSave}/>
    </React.Fragment>
  );
}

export default TeacherSchedule;
