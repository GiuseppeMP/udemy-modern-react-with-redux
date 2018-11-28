import React from "react";
import axios from "axios";

import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { message: "teste" };

  onSearchSubmit = term => {
    console.log(term);
    axios.get("https://api.unsplash.com/search/photos", {
      params: {
        query: term
      },
      headers: {
        Authorization:
          "Client-ID 600c50175b92741f2e95dd8c0714508aa114e5f3454c3e5e189b33403af6777d"
      }
    });
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
