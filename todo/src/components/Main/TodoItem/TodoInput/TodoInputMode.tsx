import { useState } from "react";
import classNames from "classnames";
const TodoInputMode = (props: any) => {
  const { children, editingMode, toggleEditingMode, onUpdateTodo } = props;
  const {todoItem}= children ; 
  const onInputBlur = () => {
    toggleEditingMode(false);
  };
  console.log()
  const onInputKeyDown = (event: any) => {
    if (event.key === "Enter") {
      toggleEditingMode(false);
      const updatedTodo = {
        ...todoItem,
        title: event.target.value,
      };
      onUpdateTodo(updatedTodo);
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
