import React from "react";
import { add, display } from "./helpers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arr: [],
      isLogged: false,
      data: { name: "Iulian", age: 34 },
    };
    this.show = function () {
      console.log("Functions built in constructor");
    };
    // this.sum= ()=>{}
    this.submitHandle = this.submitHandle.bind(this);
  }
  // Es6 Function
  print = () => console.log("Es6 function"); // Don't need to be bind
  // Function need to be bind
  submitHandle() {
    console.log("Old school function"); // Need's to be bind
  }

  render() {
    this.newUser = () => console.log("Inside render"); // Normal function inside render
    this.newUser();
    return (
      <div>
        {this.print()}
        {this.show()}
        {this.submitHandle()}
        {display("React class component")}
        <h1>Welcome {this.state.data.name}</h1>
        <p>{add(8, 12)}</p>
      </div>
    );
  }
}
