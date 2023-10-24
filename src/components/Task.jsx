const Task = ({ title }) => {
  const planned = "planned";
  const ongoing = "ongoing";
  const done = "done";
  const STATUS = "ongoing";
  return (
    <div className="task">
      <p> {title} </p>
      <div className="bottomWrapper">
        <div></div>
        <p
          className={
            STATUS === "done"
              ? done
              : STATUS === "planned"
              ? "planned"
              : STATUS === "ongoing"
              ? "ongoing"
              : ""
          }
        >
          {STATUS}
        </p>
      </div>
    </div>
  );
};

export default Task;
