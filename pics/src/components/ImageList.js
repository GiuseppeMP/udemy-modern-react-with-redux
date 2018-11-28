import React from "react";

function ImageList(props) {
  console.log(props.images);

  const images = props.images.map(image => {
    return <img src={image.urls.small} alt="Car." />;
  });

  return <div>{images}</div>;
}
export default ImageList;
