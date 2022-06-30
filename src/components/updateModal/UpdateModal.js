import React from "react";

import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: 'goldenrod'
  },
};

Modal.setAppElement("#root");



export default function UpdateModal({ handleUpdate , modalIsOpen, setIsOpen}) {

 

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {

  }

  function closeModal() {
    setIsOpen(false);
  }





  return (
    <div>
      <button onClick={openModal} className="btn btn-ghost text-danger absolute top-2 right-16 link">
        {" "}
        Edit
      </button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button onClick={closeModal} className="btn text-xl btn-ghost mb-1">
            X
          </button>
        </div>
        <div>
          <form className="container " onSubmit={handleUpdate}>
            <div className="mb-3 ">
              <input
                type="text"
                name="user_name"
                className="form-control input input-bordered input-accent"
                placeholder="Task Name"
                aria-label="Username"
              />
            </div>

            <div>
              <textarea
                name="text"
                className="form-control textarea textarea-accent"
                aria-label="With textarea"
                placeholder="Details"
              ></textarea>
            </div>
            <div className="mt-4">
              <input type="submit" value="Update" className="btn btn-info" />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

