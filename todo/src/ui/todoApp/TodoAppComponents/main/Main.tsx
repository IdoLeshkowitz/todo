import React, {useContext} from "react";
import { Todo } from "../../../../types/types";
import TodoItem from "./TodoItem/TodoItem" ;
import {TodosContext} from "../../../../store/slices/todosContext";

function Main() {
  const { onUpdateTodo, todos, onDeleteTodo } = useContext(TodosContext);
  return (
    <section className="main">
      <input className="toggle-all" type="checkbox" />
      <ul className="todo-list">
        {todos.map((todoItem: Todo) => (
          <TodoItem>{{ onUpdateTodo, todoItem, onDeleteTodo }}</TodoItem>
        ))}
      </ul>
    </section>
  );
}

export default Main;
