import React from "react";
import { useEffect } from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import { Todo } from "./types/types";
import Loading from "./components/Loading";
import { getTodosFromApi } from "./api/Api";
function App() {
	const [todos, setTodos] = React.useState<Todo[]>([]);
	const [isLoading, setIsLoading] = React.useState<boolean>(true);
	const updateTodo = (updatedTodo: Todo) => {
		const newTodos = todos.map((todo) => {
			if (todo.id === updatedTodo.id) {
				return updatedTodo;
			}
			return todo;
		});
		setTodos(newTodos);
	};
	const addTodo = (newTodo: Todo) => {
		const newTodos = [...todos, newTodo];
		setTodos(newTodos);

	};
	useEffect(() => {
		const fetchToDosResolved = (data: Todo[]) => {
			setTodos(data);
			setIsLoading(false);
		};
		getTodosFromApi().then((data) => fetchToDosResolved(data));
	}, []);
	return (
		<>
			{isLoading ? <Loading /> : null}
			<section className="todoapp" style={{ display: isLoading ? "none" : "inherit" }}>
				<Header addTodo={(newTodo: Todo) => addTodo(newTodo)} toDosCounter={todos.length} />
				<Main todos={todos} updateTodo={updateTodo} />
				<Footer />
			</section>
		</>
	);
}

export default App;
