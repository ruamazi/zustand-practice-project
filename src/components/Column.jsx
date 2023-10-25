import { useState } from "react";
import { useStore } from "../store";
import Task from "./Task";

const Column = ({ state }) => {
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [drop, setDrop] = useState(false);

  const tasks = useStore((store) =>
    store.tasks.filter((t) => t.state === state)
  );
  const addTask = useStore((store) => store.addTask);
  const setDraggetTask = useStore((store) => store.setDraggetTask);
  const draggedTask = useStore((store) => store.draggedTask);
  const moveTask = useStore((store) => store.moveTask);

  return (
    <div
      className={`column ${drop && "drop"}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDrop(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDrop(false);
      }}
      onDrop={() => {
        moveTask(draggedTask, state);
        setDraggetTask(null);
        setDrop(false);
      }}
    >
      <div className="title-wrapper">
        <p> {state} </p>
        <button onClick={() => setIsOpen(true)}>Add</button>
      </div>

      {tasks.map((t, i) => (
        <Task title={t.title} key={t.title} />
      ))}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <input onChange={(e) => setText(e.target.value)} type="text" />
            <button
              onClick={() => {
                addTask(text, state);
                setText("");
                setIsOpen(false);
              }}
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Column;
