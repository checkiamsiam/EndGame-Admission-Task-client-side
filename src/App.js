import "./App.css";
import Header from "./components/header/Header";
import InputForm from "./components/inputForm/InputForm";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TaskCard from "./components/TaskCard/TaskCard";

function App() {
  const [notes, setNotes] = useState([]);
  const [recallApi, setRecallApi] = useState(false);


  useEffect(() => {

    fetch("http://localhost:5000/tasks")
      .then(res => res.json())
      .then(data => setNotes(data))
  }, [recallApi]);


  const handleDelete = (id) => {
    fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json()) // or res.text()
      .then(data => {
        setRecallApi(!recallApi)
      })
  }



  return (
    <div className="App">
      <Header state={setNotes} />
      <Routes>
        <Route path='/' element={[
          <InputForm setRecallApi={setRecallApi} recallApi={recallApi} />,
          <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
            {notes.map((note) => (
              <TaskCard
                setRecallApi={setRecallApi}
                recallApi={recallApi}
                handleDelete={handleDelete}
                key={note._id}
                note={note}
              />
            ))}
          </div>
        ]} ></Route>
        <Route path="to-do" element={
          <div className="row row-cols-1 row-cols-md-3 g-4 m-2">
            {notes.map((note) => (
              <TaskCard
                setRecallApi={setRecallApi}
                recallApi={recallApi}
                handleDelete={handleDelete}
                key={note._id}
                note={note}
              />
            ))}
          </div>
        }></Route>
      </Routes>
    </div>
  );
}

export default App;
