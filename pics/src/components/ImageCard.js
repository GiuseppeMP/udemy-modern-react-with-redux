import React, { Component } from "react";

class ImageCard extends Component {
  render() {
    const { description, urls, id } = this.props.image;

    return (
      <div key={id}>
        <img alt={description} src={urls.small} />
      </div>
    );
  }
}
export default ImageCard;
