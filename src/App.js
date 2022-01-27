import React, { useState } from "react";
import "./App.css";
import Modal from "./Components/Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
      <h1></h1>
      <button
        className="openModalBtn"
        onClick={() => {
          setModalOpen(true);
        }}
      >
       Click Here To Open Popup
      </button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default App;
