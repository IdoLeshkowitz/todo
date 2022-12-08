//@ts-nocheck
import { Todo } from "../../../types/types";
import { MouseEvent, useState, useRef } from "react";
import { getByDisplayValue } from "@testing-library/react";
import TodoViewMode from "./TodoInput/TodoViewMode";
import TodoInputMode from "./TodoInput/TodoInputMode";
interface Props {
	todoItem: Todo;
	updateTodo: (todo: Todo) => void;
}
const TodoListItem = (props: Props): any => {
	const { todoItem, updateTodo } = props;
	const [editingMode, setEditingMode] = useState<boolean>(false);
	return (
		<>
			{editingMode ? (
				<TodoInputMode
					updateTodo={updateTodo}
					todoItem={todoItem}
					setEditingMode={(value) => setEditingMode(value)}
				/>
			) : (
				<TodoViewMode
					todoItem={todoItem}
					setEditingMode={(value) => setEditingMode(value)}
					updateTodo={updateTodo}
				/>
			)}
		</>
	);
};

export default TodoListItem;
