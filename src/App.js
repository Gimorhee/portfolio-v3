import "./styles/App.scss";
import { Menu } from "./components/Menu";
import { Front } from "./components/Front";
import { InfoSidebar } from "./components/Sidebar/InfoSidebar";
import { EmailSidebar } from "./components/Sidebar/EmailSidebar";

function App() {
  return (
    <div className="App">
      <div className="contents">
        <Front />
      </div>
      <Menu />
      <InfoSidebar />
      <EmailSidebar />
    </div>
  );
}

export default App;
