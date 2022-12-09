import { useState } from "react";
import classNames from "classnames";
const TodoInputMode = (props: any) => {
  const { children, editingMode, setEditingMode, updateTodo } = props;
  const {todoItem}= children ; 
  const onInputBlur = () => {
    setEditingMode(false);
  };
  const onInputKeyDown = (event: any) => {
    if (event.key === "Enter") {
      console.log("Enter key pressed");
      setEditingMode(false);
      const updatedTodo = {
        ...todoItem,
        title: event.target.value,
      };
      updateTodo(updatedTodo);
    }
  };

  const uneditedTodoTitle = todoItem.title;
  return (
    <li>
      <input
        className={classNames({
          edit: editingMode,
          "new-todo": true,
        })}
        type="text"
        autoFocus
        value={todoItem.text}
        onBlur={onInputBlur}
        onKeyDown={onInputKeyDown}
      />
    </li>
  );
};

export default TodoInputMode;
