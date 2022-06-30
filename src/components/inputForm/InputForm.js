import React from "react";

const inputForm = ({ recallApi, setRecallApi }) => {

  const handlePost = (e) => {
    e.preventDefault()
    const user_name = e.target.user_name.value;
    const text = e.target.text.value;
    const postData = { user_name, text , completed: false};

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
    <div className=" p-3 bg-secondary h-screen flex justify-center items-center">
      <form className="md:w-1/2 w-full" onSubmit={handlePost}>
        <div className="mb-3 mt-5">
          <input
            type="text"
            className="form-control  input input-bordered input-accent"
            placeholder="Task name"
            aria-label="Username"
            name="user_name"
          />
        </div>

        <div className="">
          <input
            className="form-control input input-bordered input-accent h-28"
            aria-label="With textarea"
            placeholder="Details"
            name="text"
          />
        </div>
        <div className="mt-4">
          <input type="submit" value="Add To List" className="btn btn-info" />
        </div>
      </form>
    </div>
  );
};

export default inputForm;
