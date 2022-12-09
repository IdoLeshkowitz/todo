//@ts-nocheck
import { Todo } from "../../../types/types";
import { useState } from "react";
import TodoViewMode from "./TodoInput/TodoViewMode";
import TodoInputMode from "./TodoInput/TodoInputMode";
interface Props {
  children: any;
}
const TodoListItem = (props: Props): any => {
  const { todoItem, onUpdateTodo, onDeleteTodo } = props.children;
  const [editingMode, setEditingMode] = useState<boolean>(false);
  return (
    <>
      {editingMode ? (
        <TodoInputMode
          onUpdateTodo={onUpdateTodo}
          setEditingMode={(value) => setEditingMode(value)}
        >
          {(todoItem = { todoItem })}
        </TodoInputMode>
      ) : (
        <TodoViewMode setEditingMode={(value) => setEditingMode(value)} onDeleteTodo={onDeleteTodo}>
          {{ todoItem }}
        </TodoViewMode>
      )}
    </>
  );
};

export default TodoListItem;
