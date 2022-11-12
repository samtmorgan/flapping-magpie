import logo from "./logo.svg";
import "./App.css";

const words = [
  "Halloween",
  "April",
  "Trindade",
  "Hideous",
  "Rotten",
  "Decaying",
  "guilty",
  "lonely",
  "heartbroken",
  "overwhelmed",
  "potion",
  "devastated",
  "through",
  "experiment",
  "favourite",
  "heard",
  "peculiar",
  "scent",
  "strange",
  "special",
  "mysteriously",
  "menacingly",
  "independent",
  "incomplete",
  "disapprove",
  "dishonest",
  "disappear",
  "disagree",
  "straight",
  "castle",
  "eerily",
  "incapable",
  "acrobats",
  "jugglers",
  "clowns",
  "circus",
  "travel",
  "travelling",
  "performer",
  "ticket",
  "even though",
  "because",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>{/* Edit <code>src/App.js</code> and save to reload. */}</p>
        {words.map((word, index) => (
          <div>
            {index + 1}. {word}
          </div>
        ))}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
