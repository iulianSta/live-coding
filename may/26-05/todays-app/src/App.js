import { Text, Hello } from "./components/Text";
const name = "Iulian";
const age = 34;
const city = "Altenburg";
const hobbys = ["cars", "sports", "fishing"];

const listItem = hobbys.map((hobby, i) => <li key={i}>{hobby}</li>);

function App() {
  return (
    <div className="App">
      <h1>Hi I am React</h1>
      <Text />
      <Hello userName={name} userAge={age} userCity={city} />
      <ul>{listItem}</ul>
    </div>
  );
}

export default App;
