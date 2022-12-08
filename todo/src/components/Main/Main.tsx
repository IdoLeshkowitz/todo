import React from "react";
import { Todo } from "../../types/types";
import TodoItem from "./TodoItem/TodoItem";
interface props {
	todos: Todo[];
	updateTodo: (todo: Todo) => void;
}
function Main(props: props) {
	const { todos, updateTodo } = props;
	return (
		<section className="main">
			<input className="toggle-all" type="checkbox" />
			<ul className="todo-list">
				{todos.map((todo) => (
					<TodoItem todoItem={todo} updateTodo={updateTodo} />
				))}
			</ul>
		</section>
	);
}

export default Main;
