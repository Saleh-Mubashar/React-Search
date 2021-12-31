import { React, useState } from "react";
import "./App.css";
import Gallery from "./Components/Gallery";
import Modal from "./Components/Modal";

function App() {
  const [imgSrc, setImgSrc] = useState("");
  const [open, setOpen] = useState(false);

  return (
    <div className="main">
      <h1>React Carousel</h1>
      <Gallery setImgSrc={setImgSrc} setOpen={setOpen} />
      {open ? <Modal src={imgSrc} setOpen={setOpen}/> : null}
    </div>
  );
}

export default App;
