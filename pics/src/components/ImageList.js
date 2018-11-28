import React from "react";

function ImageList(props) {
  console.log(props.images);

  const images = props.images.map(({ description, id, urls }) => {
    return <img key={id} src={urls.small} alt={description} />;
  });

  return <div>{images}</div>;
}
export default ImageList;
