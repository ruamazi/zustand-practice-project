import Column from "./components/Column";
import { BsGithub } from "react-icons/bs";

function App() {
  return (
    <>
      <div className="app">
        <Column state="planned" />
        <Column state="ongoing" />
        <Column state="done" />
      </div>
      <footer>
        <a
          href="https://github.com/ruamazi/zustand-practice-project"
          target="_blanc"
          className="wrapper"
        >
          {<BsGithub />}
        </a>
      </footer>
    </>
  );
}

export default App;
