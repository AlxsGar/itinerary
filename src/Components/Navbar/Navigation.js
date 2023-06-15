import React from "react";
import classes from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={classes["nav"]}>
      <ul>
        <li>
            <a href="/">Users</a>
        </li>
        <li>
            <a href="/">admin</a>
        </li>
        <li>
            <button>Logout</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
