import "./ListItem.css";

function ListItem({ task, toggleCompleted }) {
  function handleChange() {
    toggleCompleted(task.id);
  }

  return (
    <div className="list-item-container">
      <input type="checkbox" checked={task.completed} onChange={handleChange} />
      <p>{task.input}</p>
    </div>
  );
}

export default ListItem;
