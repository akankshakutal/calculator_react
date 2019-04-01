import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ResultComponent from "./resultComponent";
import KeyPadComponent from "./keyPadComponents";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: ""
    };
  }

  onClick = button => {
    this.setState({
      result: this.state.result + button
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Simple Calculator</h1>
        <div className="calculator-body">
          <ResultComponent className="result" result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
