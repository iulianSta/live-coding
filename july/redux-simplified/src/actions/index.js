// Step 1

const increment = () => {
  return {
    type: "INCrement",
  };
};

const decrement = () => {
  return {
    type: "DECREMENT",
  };
};

const changeName = () => {
  return {
    type: "CHANGE_NAME",
    payload: name,
  };
};

export { increment, decrement, changeName };
