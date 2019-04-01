import React, { Component } from "react";

const BUTTONS_ROW = [
  ["1", "2", "3", "+"],
  ["4", "5", "6", "-"],
  ["7", "8", "9", "*"],
  [".", "0", "=", "/"]
];

class KeyPadComponent extends Component {
  generateButtons(row) {
    return row.map(value => {
      return (
        <button
          name={value}
          onClick={element => this.props.onClick(element.target.name)}
        >
          {value}
        </button>
      );
    });
  }

  GenerateButtonRow() {
    return BUTTONS_ROW.map(row => this.generateButtons(row));
  }

  render() {
    return this.GenerateButtonRow();
  }
}

export default KeyPadComponent;
