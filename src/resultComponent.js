import React, { Component } from "react";

class ResultComponent extends Component {
  render() {
    let { result } = this.props;
    return (
      <div className="result">
        <div>{result}</div>
      </div>
    );
  }
}

export default ResultComponent;
