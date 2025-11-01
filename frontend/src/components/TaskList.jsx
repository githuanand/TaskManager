function TaskList({ tasks, onToggle, onDelete }) {
  if (!tasks.length) return <p>No tasks yet!</p>;

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <li key={task._id} className={task.completed ? "done" : ""}>
          <span onClick={() => onToggle(task._id)}>{task.title}</span>
          <button onClick={() => onDelete(task._id)}>❌</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
