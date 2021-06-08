import { useEffect } from "react";

// const List = ({ setCount, setInput }) => {
const List = ({ setCount, log }) => {
  // Run useEffect When a Prop Changes
  useEffect(() => {
    console.log("hi");
  }, [log]);
  return (
    <div>
      <input
        type="text"
        onKeyUp={(prevKey) =>
          setInput(() => {
            console.log("Go on");
          }, [prevKey])
        }
      />
      <button onClick={() => setCount((prevState) => prevState - 1)}>-</button>
    </div>
  );
};

export default List;
