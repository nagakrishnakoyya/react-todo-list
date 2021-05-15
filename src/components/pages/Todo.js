import React from "react";

const Todo = ({ item, changeTodoStatus, editTodo, deleteTodo }) => {
  return (
    <li>
      <span className={item.completed ? "completed" : ""}>{item.title}</span>
      <span className="completed">
        <input
          type="checkbox"
          checked={item.completed}
          name="completed"
          onChange={(e) => changeTodoStatus(e, item.id)}
        />
      </span>
      <span className="edit">
        <i className="fas fa-edit" onClick={() => editTodo(item.id)}></i>
      </span>
      <span className="delete">
        <i className="fas fa-trash-alt" onClick={() => deleteTodo(item.id)}></i>
      </span>
    </li>
  );
};

export default Todo;
