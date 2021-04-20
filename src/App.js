import "./styles/App.scss";
import { Menu } from "./components/Menu";
import { Front } from "./components/Front";

function App() {
  return (
    <div className="App">
      <div className="contents">
        <Front />
      </div>
      <Menu />
    </div>
  );
}

export default App;
