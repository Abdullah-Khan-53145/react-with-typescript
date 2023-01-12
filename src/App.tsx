import "./App.css";
import Greet from "./components/Greet";
import { Heading } from "./components/Heading";
import { Status } from "./components/Status";

function App() {
  return (
    <div className="App">
      <Status status="error" />
      <Heading childern="hello" />
      <Greet name="Abdullah" isLoggedIn={true} />
    </div>
  );
}

export default App;
