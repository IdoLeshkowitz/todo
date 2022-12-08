import { useRef } from "react";
import { Todo } from "../types/types";
function Header(props: any) {
	const { addTodo, toDosCounter } = props;
	const inputRef = useRef<string | undefined>();
	const handleKeyDown = (event: any) => {
		if (event.code === "Enter") {
			if (event.currentTarget.value) {
				const newTodo: Todo = {
					id: toDosCounter + 1,
					title: event.target.value,
					completed: false,
				};
				addTodo(newTodo);
				inputRef.current = "";
			}
		}
	};

	return (
		<header className="header">
			<h1>TODO</h1>
			<input className="new-todo" onKeyDown={handleKeyDown} placeholder="What needs to be done?" />
		</header>
	);
}

export default Header;
