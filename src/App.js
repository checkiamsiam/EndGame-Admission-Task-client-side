import "./App.css";
import Header from "./components/header/Header";
import InputForm from "./components/inputForm/InputForm";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import TaskCard from "./components/TaskCard/TaskCard";
import Completed from "./components/Routes/Completed";

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
      .then(res => res.json())
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
            {notes.filter(n => n.completed === false).map((note) => (
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
          <div className="row row-cols-1 row-cols-md-3 g-4 m-0 min-h-screen">
            {notes.filter(n => n.completed === false).map((note) => (
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
        <Route path='/completed' element={<Completed completedTask={notes.filter(n => n.completed === true)}></Completed>} ></Route>
        <Route path='*' element={
          <div className="min-h-screen flex justify-center items-center">
            <div>
              <h1 className="sm:text-8xl text-3xl text-danger">404</h1>
              <p>Page Not Found</p>
            </div>
          </div>
        }></Route>
      </Routes>
      <footer class="footer footer-center p-4 bg-base-300 text-base-content">
        <div>
          <p>Copyright © 2022 - All right reserved by Me</p>
          <p>Build For My Own</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
