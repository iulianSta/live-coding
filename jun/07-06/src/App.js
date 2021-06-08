import React, { useState, useEffect } from "react";
import List from "./components/List";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  //const [log, setLog] = useState(false);
  // useEffect(() => {
  //   console.log("I am Ready ");
  // }, []);

  //useEffect running on every render
  // useEffect(() => {
  //   console.log("Hello World!");
  // });

  // Stop useEffect from running on every render
  // useEffect(() => {
  //   console.log("Stop Hello World!");
  // }, []);

  //useEffect running only once
  // useEffect(() => {
  //   console.log("Hello World!");
  // }, []);

  //useEffect running on state changed
  useEffect(() => {
    console.log("You clicked!");
  }, [count]);
  return (
    <React.Fragment>
      <button onClick={() => setCount(count + 1)}>+</button>
      <List setCount={setCount} setInput={setInput} />
      <h3>{count}</h3>
    </React.Fragment>
  );
}
/*
Stop useEffect from running on every render
Only Run Once, on Mount
Run useEffect on State Change
Run useEffect When a Prop Changes

*/
export default App;
