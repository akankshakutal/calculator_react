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
    this.reset = this.reset.bind(this);
  }

  onClick = button => {
    if (button === "=") {
      this.calculate();
    } else {
      this.setState({
        result: this.state.result + button
      });
    }
  };

  calculate = () => {
    var checkResult = this.state.result;
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    }
    this.setState({
      result: eval(checkResult)
    });
  };

  reset = () => {
    this.setState({
      result: ""
    });
  };

  render() {
    return (
      <div className="main">
        <h1>Sample Calculator</h1>
        <button className="clear" name="C" onClick={this.reset}>
          C
        </button>
        <div className="calculator-body">
          <ResultComponent nent className="result" result={this.state.result} />
          <KeyPadComponent onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
