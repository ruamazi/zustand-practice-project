import Column from "./components/Column";

function App() {
  return (
    <div className="app">
      <Column state="Planned" />
      <Column state="Ongoing" />
      <Column state="Done" />
    </div>
  );
}

export default App;
