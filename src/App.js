import { useEffect, useState } from "react";
// import CreateArea from "./components/CreateArea";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Note from "./components/Card/Note";
import "./App.css";
import Calender from "./components/Calender/Calender";
import Filter from "./components/Filter/Filter";

// const DUMMY_TODOS = [
//   {
//     title: "Wake up early",
//     date: new Date("2019-03-12"),
//     randomID: Math.random(),
//   },
//   { title: "Exercise", date: new Date("2022-10-22"), randomID: Math.random() },
//   {
//     title: "Have breakfast",
//     date: new Date("2019-10-01"),
//     randomID: Math.random(),
//   },
//   {
//     title: "Read for 30 minutes",
//     date: new Date("2023-01-09"),
//     randomID: Math.random(),
//   },
//   {
//     title: "Take breaks every hour",
//     date: new Date("2021-12-31"),
//     randomID: Math.random(),
//   },
//   {
//     title: "Finish work by 6 PM",
//     date: new Date("2021-07-28"),
//     randomID: Math.random(),
//   },
//   {
//     title: "Cook dinner",
//     date: new Date("2020-09-16"),
//     randomID: Math.random(),
//   },
//   {
//     title: "Spend time with family",
//     date: new Date("2022-07-11"),
//     randomID: Math.random(),
//   },
// ];

function App() {
  const [nodes, setNodes] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [all, setAll] = useState(true);
  // title, description, date

  function addNote(inputList) {
    const newTodos = [...nodes, inputList];
    setNodes(newTodos);
    setFilteredData((prev) => {
      return [...prev, inputList];
    });
    saveToLocalStorage(newTodos);
  }

  useEffect(() => {
    const prevStorage = localStorage.getItem("todos");
    console.log(JSON.parse(prevStorage));
    if (prevStorage && prevStorage.length > 2) {
      setNodes(JSON.parse(prevStorage));
    }
  }, []);

  function saveToLocalStorage(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function onDeleteHandler(keyToBeDelete) {
    const newTodos = nodes.filter((curr) => curr.randomID !== keyToBeDelete);

    setNodes(newTodos);
    setFilteredData((prev) => {
      return prev.filter((curr) => {
        return curr.randomID !== keyToBeDelete;
      });
    });
    saveToLocalStorage(newTodos);
  }
  // console.log(nodes);

  const filterHandler = (filteredDates) => {
    if (filteredDates.month === "all" && filteredDates.year === "all") {
      setAll(true);
      return;
    }

    setAll(false);

    let filteredEnteredData = [];
    if (filteredDates.month !== "all" && filteredDates.year === "all") {
      filteredEnteredData = nodes.filter((curr) => {
        const currentEnteredDate = new Date(curr.date);
        const month = currentEnteredDate.getMonth();
        return Number(filteredDates.month) === month + 1;
      });
    } else if (filteredDates.month === "all" && filteredDates.year !== "all") {
      filteredEnteredData = nodes.filter((curr) => {
        const currentEnteredDate = new Date(curr.date);
        const year = currentEnteredDate.getFullYear();
        return Number(filteredDates.year) === year;
      });
    } else {
      filteredEnteredData = nodes.filter((curr) => {
        const currentEnteredDate = new Date(curr.date);
        const month = currentEnteredDate.getMonth();
        const year = currentEnteredDate.getFullYear();
        return (
          Number(filteredDates.month) === month + 1 &&
          Number(filteredDates.year) === year
        );
      });
    }
    setFilteredData(filteredEnteredData);
  };

  return (
    <>
      <Header />
      <div className="container__grid">
        <Form onAdd={addNote} />
        <Calender data={all ? nodes : filteredData} />
      </div>

      <section className="section-todo-list">
        <Filter onFilter={filterHandler} />
        <div className="note-container">
          {!all &&
            filteredData.map((curr, idx) => {
              return (
                <Note
                  onDelete={onDeleteHandler}
                  key={Math.random()}
                  id={curr.randomID}
                  title={curr.title}
                  description={curr.description}
                  date={curr.date}
                />
              );
            })}

          {all &&
            nodes.map((curr, idx) => {
              return (
                <Note
                  onDelete={onDeleteHandler}
                  key={Math.random()}
                  id={curr.randomID}
                  title={curr.title}
                  description={curr.description}
                  date={curr.date}
                />
              );
            })}
        </div>
      </section>
    </>
  );
}

export default App;
