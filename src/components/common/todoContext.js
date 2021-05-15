import React, { createContext, useState } from "react";
import data from "./data";

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [list, setList] = useState(data);
  const [current, setCurrent] = useState(null);
  const [isShow, setIsShow] = useState(false);

  return (
    <TodoContext.Provider
      value={{
        todoList: [list, setList],
        currentItem: [current, setCurrent],
        showHideNewTodo: [isShow, setIsShow],
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};
