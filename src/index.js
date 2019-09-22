// import React from "react";
import ReactDOM from "react-dom";
import React, { Component } from "react";

import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = { name: [] }; // initialization
  }

  addName() {
    this.setState({ name: [...this.state.name, ""] });
  }

  clickHandler(e, index) {
    this.state.name[index] = e.target.value;
    this.setState({ name: this.state.name });
  }

  render() {
    return (
      <div>
        {this.state.name.map((name, index) => {
          return (
            <div key={index}>
              <input
                value={name}
                disabled
                onChange={e => this.clickHandler(e, index)}
              />
            </div>
          );
        })}
        <hr />
        <button onClick={e => this.addName(e)}>Add</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
