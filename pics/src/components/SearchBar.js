import React, { Component } from "react";

export default class SearchBar extends Component {
  state = {
    term: ""
  };

  onInputChange(e) {
    console.log(e.target.value);
  }

  onFormSubmit = e => {
    e.preventDefault();
    console.log(this.state.term);
  };

  componentDidUpdate() {
    console.log("I was updated;");
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label htmlFor="search">Image Search</label>
            <input
              type="text"
              id="search"
              value={this.state.term}
              onChange={e =>
                this.setState({
                  term: e.target.value
                })
              }
            />
          </div>
        </form>
      </div>
    );
  }
}
