import React, { useState } from 'react';
import UpdateModal from '../updateModal/UpdateModal';


const customStyles = {
  position: "absolute",
  top: "-40px",
  left: "43%",
  height: "80px",
  width: "80px",
};

const TaskCard = ({ note, handleDelete, recallApi, setRecallApi }) => {

  const [check, setCheck] = useState(false)
  const [modalIsOpen, setIsOpen] = React.useState(false);


  const handleUpdate = (e) => {
    e.preventDefault()
    const user_name = e.target.user_name.value;
    const text = e.target.text.value;
    const updatedData = { user_name, text };
    const url = `http://localhost:5000/tasks/${note._id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(data => setRecallApi(!recallApi))
    e.target.user_name.value = ''
    e.target.text.value = ''
    setIsOpen(false);
  }

  const addToComplete = () => {
    setCheck(true)
    const url = `http://localhost:5000/addToComplete/${note._id}`
    fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({})
    })
      .then(res => res.json())
      .then(data => setRecallApi(!recallApi))
  }

  return (
    <div className="col my-20 " style={{ position: "relative" }}>
      <div class="card  h-52 bg-neutral text-neutral-content">
        <div class="card-body items-center text-center">
          <h2 class="card-title">{note.user_name}</h2>
          <p>{note.text.slice(0, 50)}</p>
          <div class="card-actions justify-end">
            <button onClick={() => handleDelete(note._id)} class="btn btn-primary">Cancel</button>
            <button onClick={addToComplete} class="btn btn-primary"><input checked={check} type="checkbox" class="checkbox checkbox-accent mr-2" /> Completed</button>



          </div>
        </div>
      </div>
      <UpdateModal handleUpdate={handleUpdate}  modalIsOpen={modalIsOpen}  setIsOpen={setIsOpen} />
    </div>
  );
};

export default TaskCard;