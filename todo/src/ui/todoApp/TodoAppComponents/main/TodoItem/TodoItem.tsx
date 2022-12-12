//@ts-nocheck
import { Todo } from "../../../../../types/types";
import { useState } from "react";
import TodoViewMode from "./TodoViewMode";
import TodoInputMode from "./TodoInputMode";
interface Props {
  children: any;
}
const TodoListItem = (props: Props): any => {
  const { todoItem, onUpdateTodo, onDeleteTodo } = props.children;
  const [editingMode, setEditingMode] = useState<boolean>(false);
  const toggleEditingMode = (modeToBeSet) => {
    setEditingMode(modeToBeSet);
  };
  return (
    <>
      {editingMode ? (
        <TodoInputMode onUpdateTodo={onUpdateTodo} toggleEditingMode={toggleEditingMode}>
          {{ todoItem }}
        </TodoInputMode>
      ) : (
        <TodoViewMode
          toggleEditingMode={toggleEditingMode}
          onDeleteTodo={onDeleteTodo}
          onUpdateTodo={onUpdateTodo}
        >
          {{ todoItem }}
        </TodoViewMode>
      )}
    </>
  );
};

export default TodoListItem;
