import React from "react";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { message: "teste" };

  onSearchSubmit = term => {
    console.log(term + this.state.message);
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />
      </div>
    );
  }
}

export default App;
