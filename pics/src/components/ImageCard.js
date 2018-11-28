import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    console.log(this.imageRef.image.clientHeight);
  };

  render() {
    const { description, urls, id } = this.props.image;

    return (
      <div key={id}>
        <img ref={this.imageRef} alt={description} src={urls.small} />
      </div>
    );
  }
}
export default ImageCard;
