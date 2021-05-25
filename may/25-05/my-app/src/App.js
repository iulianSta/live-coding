function App() {
  function handelSubmit(e) {
    e.preventDefault();
  }
  return (
    <div>
      <h1 className="header" id="h1">
        React App
      </h1>
      {console.log("Hi")}
      <h2>I am a H2</h2>
      <form onSubmit={handelSubmit}>
        <input type="text" placeholder="Enter your name" />
      </form>
      <img
        className="img"
        src="./img/nature.jpg"
        alt="Nature with river, treesand mountains"
      />
    </div>
  );
}

export default App;
