import { Text, Hello } from "./components/Text";
let name = "Iulian";
function App() {
  return (
    <div className="App">
      <h1>Hi I am React</h1>
      <Text />
      <Hello userName={name} />
    </div>
  );
}

export default App;
