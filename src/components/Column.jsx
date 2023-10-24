import Task from "./Task";

const Column = ({ state }) => {
  return (
    <div className="column">
      <p> {state} </p>
      <Task title="zb" />
    </div>
  );
};

export default Column;
