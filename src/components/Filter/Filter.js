import React, { useRef } from "react";
import classes from "./Filter.module.css";

export default function Filter(props) {
  const year = useRef("all");
  const month = useRef("all");

  function submitHandler(e) {
    e.preventDefault();

    props.onFilter({ month: month.current.value, year: year.current.value });
  }

  return (
    <div className={classes.container}>
      <form
        action=""
        onSubmit={submitHandler}
        className={classes.form__container}
      >
        <select ref={month} name="year" id="">
          <option value="all">Month</option>
          <option value="all">All</option>
          <option value="01">January</option>
          <option value="02">February</option>
          <option value="03">March</option>
          <option value="04">April</option>
          <option value="05">May</option>
          <option value="06">June</option>
          <option value="07">July</option>
          <option value="08">August</option>
          <option value="09">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>

        <select ref={year} name="year" id="">
          <option value="all">Year</option>
          <option value="all">All</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>

        <button>Filter</button>
      </form>
    </div>
  );
}
