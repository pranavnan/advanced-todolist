import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Note(props) {
  function handleDelete() {
    console.log(props.id);
    props.onDelete(props.id);
  }

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const enteredDate = new Date(props.date);

  const day = enteredDate.getDate();
  const month = monthNames[enteredDate.getMonth()];
  const year = String(enteredDate.getFullYear()).slice(2);

  const date = `${day} ${month} ${year}`;

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <p>{date}</p>
      <button onClick={handleDelete}>
        <DeleteIcon />
      </button>
    </div>
  );
}
