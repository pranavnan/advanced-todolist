import React from "react";
import classes from "./Calender.module.css";

export default function Calender(props) {
  const arr = [
    { serialID: 1, isHasTodo: false },
    { serialID: 2, isHasTodo: false },
    { serialID: 3, isHasTodo: false },
    { serialID: 4, isHasTodo: false },
    { serialID: 5, isHasTodo: false },
    { serialID: 6, isHasTodo: false },
    { serialID: 7, isHasTodo: false },
    { serialID: 8, isHasTodo: false },
    { serialID: 9, isHasTodo: false },
    { serialID: 10, isHasTodo: false },
    { serialID: 11, isHasTodo: false },
    { serialID: 12, isHasTodo: false },
    { serialID: 13, isHasTodo: false },
    { serialID: 14, isHasTodo: false },
    { serialID: 15, isHasTodo: false },
    { serialID: 16, isHasTodo: false },
    { serialID: 17, isHasTodo: false },
    { serialID: 18, isHasTodo: false },
    { serialID: 19, isHasTodo: false },
    { serialID: 20, isHasTodo: false },
    { serialID: 21, isHasTodo: false },
    { serialID: 22, isHasTodo: false },
    { serialID: 23, isHasTodo: false },
    { serialID: 24, isHasTodo: false },
    { serialID: 25, isHasTodo: false },
    { serialID: 26, isHasTodo: false },
    { serialID: 27, isHasTodo: false },
    { serialID: 28, isHasTodo: false },
    { serialID: 29, isHasTodo: false },
    { serialID: 30, isHasTodo: false },
    { serialID: 31, isHasTodo: false },
  ];
  // title, description, date
  props.data.map((curr) => {
    const enteredDate = new Date(curr.date);
    const day = enteredDate.getDate();
    arr[day - 1].isHasTodo = true;
  });

  return (
    <div className={classes.container}>
      {arr.map((curr) => {
        const classesNames = `${classes.specified__div} ${
          curr.isHasTodo ? classes.active : ""
        } `;
        return (
          <div key={curr.serialID} className={classesNames}>
            {curr.serialID}
          </div>
        );
      })}
    </div>
  );
}
