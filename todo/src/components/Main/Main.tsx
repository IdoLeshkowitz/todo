import React from "react";
import { Todo } from "../../types/types";
import TodoItem from "./TodoItem/TodoItem";
interface props {
  children: {
    todos: Todo[];
    onUpdateTodo: (todo: Todo) => void;
    onDeleteTodo: (todo: Todo) => void;
  };
}
function Main(props: props) {
  const { onUpdateTodo, todos, onDeleteTodo } = props.children;
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
