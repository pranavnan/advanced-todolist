import React, { useRef } from "react";
import AddIcon from "@mui/icons-material/Add";
import "./Form.css";

export default function Form(props) {
  const enteredTitle = useRef("");
  const enteredDescription = useRef("");
  const enteredDate = useRef("");

  function submitHandler(e) {
    e.preventDefault();

    props.onAdd({
      title: enteredTitle.current.value,
      description: enteredDescription.current.value,
      date: enteredDate.current.value,
      randomID: Math.random(),
    });

    console.log(enteredDate.current.value);

    enteredTitle.current.value = "";
    enteredDescription.current.value = "";
    enteredDate.current.value = "";
  }

  return (
    <form onSubmit={submitHandler} className="create-note">
      <input
        className="title"
        type="text"
        name="title"
        placeholder="Title"
        ref={enteredTitle}
        required
      />
      <textarea
        className="description"
        name="content"
        id=""
        cols=""
        rows=""
        placeholder="Enter Description...."
        ref={enteredDescription}
      ></textarea>

      <input
        ref={enteredDate}
        className="date"
        type="date"
        min="2022-01-01"
        max="2024-12-31"
        required
      />

      <button type="submit">
        <AddIcon />
      </button>
    </form>
  );
}
