import React, { useState, useEffect, useMemo, useContext } from "react";
import { TodoContext } from "../common/todoContext";

const AddTodo = () => {
  const initialState = useMemo(
    () => ({
      title: "",
      completed: false,
    }),
    []
  );

  const { todoList, currentItem } = useContext(TodoContext);
  const [list, setList] = todoList;
  const [current, setCurrent] = currentItem;
  const [todo, setTodo] = useState(initialState);
  const { title, completed } = todo;

  useEffect(() => {
    if (current !== null) {
      setTodo(current);
    } else {
      setTodo(initialState);
    }
  }, [current, initialState]);

  const updateStateHandler = (e) => {
    const { type, value, checked } = e.target;
    if (type === "text") {
      setTodo({ ...todo, title: value });
    } else {
      setTodo({ ...todo, completed: checked });
    }
  };

  const addTodoHandler = (currentId) => {
    let listLength;
    let id;

    if (list.length) {
      listLength = list.length;
      id = listLength ? list[listLength - 1].id + 1 : 1;
    }
    const newTodo = {
      id,
      title,
      completed,
    };
    if (current === null) {
      setList([...list, newTodo]);
    } else {
      setList(list.map((item) => (item.id === currentId ? todo : item)));
    }
    resetInitialState();
  };

  const resetInitialState = () => {
    setTodo(initialState);
    setCurrent(null);
  };

  return (
    <div className="add-todo-page">
      <div className="my-todo-list">
        <div className="title">
          <h2>
            {current ? "Edit" : "Add"} <small>todo</small>
          </h2>
        </div>
        <div className="add-todo">
          <div className="form-group">
            <label htmlFor="todo">Title:</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter todo"
              name="title"
              value={title}
              onChange={updateStateHandler}
            />
          </div>
          <div className="form-group form-check">
            <label className="form-check-label">
              <input
                className="form-check-input"
                type="checkbox"
                name="completed"
                value={!completed}
                checked={completed}
                onChange={updateStateHandler}
              />{" "}
              <span>Completed</span>
            </label>
          </div>
          <button
            className="btn btn-primary btn-block"
            onClick={() => addTodoHandler(current?.id)}
            disabled={!title}
          >
            {current ? "Update todo" : "Add todo"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddTodo;
