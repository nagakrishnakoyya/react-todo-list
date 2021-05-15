import React, { useContext } from "react";
import Todo from "./Todo";
import AddTodo from "./AddTodo";
import { TodoContext } from "../common/todoContext";
import data from "../common/data";
const Todos = () => {
  const { todoList, currentItem, showHideNewTodo } = useContext(TodoContext);
  const [list, setList] = todoList;
  const [, setCurrent] = currentItem;
  const [isShow, setIsShow] = showHideNewTodo;

  const changeTodoStatus = (e, id) => {
    const listItems = [...list];
    const listItem = listItems.find((item) => item.id === id);
    listItem.completed = e.target.checked;
    setList([...listItems]);
  };

  const editTodo = (id) => {
    const listItems = [...list];
    const currentItem = listItems.find((item) => item.id === id);
    setCurrent(currentItem);
    setIsShow(true);
  };

  const deleteTodo = (id) => {
    const listItems = [...list];
    const currentItems = listItems.filter((item) => item.id !== id);
    setList([...currentItems]);
  };

  const refreshList = () => {
    setList(data);
  };

  const newTodoShowHide = () => {
    setIsShow(!isShow);
  };
  return (
    <div className="todos-page">
      <div className="container">
        <div className="row">
          <div className="col-xl-8 col-lg-8 col-md-8 com-sm-6 col-xs-12">
            <div className="my-todo-list">
              <div className="title">
                <h2>
                  My <small>todo</small> list{" "}
                  {!list.length && (
                    <span
                      className="refresh"
                      onClick={refreshList}
                      title="Get initial data"
                    >
                      <i className="fas fa-sync"></i>
                    </span>
                  )}
                </h2>
                <button
                  className="btn btn-sm btn-info"
                  onClick={newTodoShowHide}
                >
                  <span>
                    <i className="fas fa-plus-circle"></i>{" "}
                    {isShow ? "Hide new todo" : "Show new todo"}
                  </span>
                </button>
              </div>
              <div className="todo-list">
                <ul>
                  {list &&
                    list.map((item) => {
                      return (
                        <Todo
                          key={item.id}
                          item={item}
                          editTodo={editTodo}
                          deleteTodo={deleteTodo}
                          changeTodoStatus={changeTodoStatus}
                        />
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-xl-4 col-lg-4 col-md-4 com-sm-6 col-xs-12">
            {isShow && <AddTodo />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
