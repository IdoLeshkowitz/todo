import { Todo } from "../types/types";

export const getTodosFromApi = async () => {
	const response = await fetch("https://jsonplaceholder.typicode.com/todos");
	const todos: Todo[] = await response.json();
	return todos;
};
