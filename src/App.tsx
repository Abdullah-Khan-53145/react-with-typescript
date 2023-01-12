import "./App.css";
import Greet from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";

function App() {
  const personName = {
    first: "Abdullah",
    last: "Khan",
  };
  const nameList = [
    {
      first: "Abdullah",
      last: "Khan",
    },
    {
      first: "Rana",
      last: "Sanaullah",
    },
    {
      first: "Hammad",
      last: "Haider",
    },
  ];
  return (
    <div className="App">
      <Greet name="Abdullah" messageCount={20} isLoggedIn={false} />
      <Person name={personName} />
      <PersonList names={nameList} />
    </div>
  );
}

export default App;
