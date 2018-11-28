import React from "react";
import "./ImageList.css";

function ImageList(props) {
  console.log(props.images);

  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.small} alt={description} />;
  });

  return <div className="image-list">{images}</div>;
}
export default ImageList;
