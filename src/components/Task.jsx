import { useStore } from "../store";
import { BsFillTrash3Fill } from "react-icons/bs";

const Task = ({ title }) => {
  const task = useStore((store) => store.tasks.find((t) => t.title === title));
  const deleteTask = useStore((store) => store.deleteTask);
  const setDraggetTask = useStore((store) => store.setDraggetTask);

  return (
    <div
      className="task"
      draggable
      onDragStart={() => {
        setDraggetTask(task.title);
      }}
    >
      <p> {task.title} </p>
      <div className="bottomWrapper">
        <div className="trash" onClick={() => deleteTask(title)}>
          <BsFillTrash3Fill />
        </div>
        <p
          className={
            task.state === "done"
              ? "done"
              : task.state === "planned"
              ? "planned"
              : task.state === "ongoing"
              ? "ongoing"
              : ""
          }
        >
          {task.state}
        </p>
      </div>
    </div>
  );
};

export default Task;
