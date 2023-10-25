import Column from "./components/Column";

function App() {
  return (
    <div className="app">
      <Column state="planned" />
      <Column state="ongoing" />
      <Column state="done" />
    </div>
  );
}

export default App;
