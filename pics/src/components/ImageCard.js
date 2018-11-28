import React, { Component } from "react";

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spans: 0
    };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    console.log(this.imageRef.current.clientHeight);

    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const clientHeight = this.imageRef.current.clientHeight;
    console.log(clientHeight);
    const spans = Math.ceil(clientHeight / 10);
    this.setState({
      spans: spans
    });
  };

  render() {
    const { description, urls, id } = this.props.image;

    return (
      <div key={id} style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} alt={description} src={urls.small} />
      </div>
    );
  }
}
export default ImageCard;
