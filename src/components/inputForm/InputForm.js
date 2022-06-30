import React from "react";

const inputForm = ({ recallApi, setRecallApi }) => {

  const handlePost = (e) => {
    e.preventDefault()
    const user_name = e.target.user_name.value;
    const text = e.target.text.value;
    const postData = { user_name, text };

    fetch('http://localhost:5000/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(res => res.json())
      .then(data => setRecallApi(!recallApi))
    e.target.user_name.value = ''
    e.target.text.value = ''

  }


  return (
    <div className=" p-3 bg-secondary">
      <form className="container" onSubmit={handlePost}>
        <div className="input-group mb-3 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Task name"
            aria-label="Username"
            name="user_name"
          />
        </div>

        <div className="input-group">
          <span className="input-group-text">Description</span>
          <textarea
            className="form-control"
            aria-label="With textarea"
            name="text"
          ></textarea>
        </div>
        <div className="mt-4">
          <input type="submit" value="Add Task" className="btn btn-info" />
        </div>
      </form>
    </div>
  );
};

export default inputForm;
