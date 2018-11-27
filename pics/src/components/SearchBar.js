import React, { Component } from "react";

export default class SearchBar extends Component {
  onInputChange(e) {
    console.log(e.target.value);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input type="text" id="search" onChange={this.onInputChange} />
          </div>
        </form>
      </div>
    );
  }
}
