import React from "react";
import CloseIcon from "@mui/icons-material/Close";

function Modal(props) {
  let closeHandler = () => {
      props.setOpen(false)
  };
  return (
    <div className="modal">
      <img src={props.src}></img>
      <CloseIcon className="closeBtn" onClick={closeHandler} />
    </div>
  );
}

export default Modal;
