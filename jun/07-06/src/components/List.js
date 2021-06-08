import { useEffect } from "react";

const List = ({ setCount, setInput }) => {
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
