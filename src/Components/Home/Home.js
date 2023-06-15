import React, { useContext } from "react";

import classes from "./Home.module.css";
import Card from "../Elements/Card/Card";
import Button from "../Elements/Button/Button";
import AuthContext from "../Auth/auth-context";

function Home() {
    const authCtx = useContext(AuthContext)

    const submitHandler = () => {
        authCtx.onSelectPage(1);
    }

  return (
    <React.Fragment>
      <Card className={classes.home}>
        <h1>Registro de Horario</h1>
        <Button onClick={submitHandler}>Registrar</Button>
      </Card>
    </React.Fragment>
  );
}

export default Home;
