import React from "react";
import { Images } from "./Images";

function Gallery(props) {
  let handleOpen = (e) =>{
      props.setImgSrc(e.target.src)
      props.setOpen(true)
  }

  return (
    <div className="gallery">
      {Images.map((item, i) => {
        return (
          <div className="gallery__item" key={i}>
            <img src={item.url} onClick={handleOpen}/>
          </div>
        );
      })}
    </div>
  );
}

export default Gallery;
