import {TodosContext} from "../../../store/slices/todosContext";
import {useContext} from "react";

const Footer = () => {
	const { onClearCompleted, todos } =useContext(TodosContext);
	const calculateActiveTodos = ():string => {
		const activeTodos = todos.filter((todo: any) => !todo.completed);
		return activeTodos.length;
	};

	return (
		<footer className="footer">
			<span className="todo-count">
				<strong>{calculateActiveTodos()}</strong> items left
			</span>
			<button className="clear-completed" onClick={onClearCompleted}>
				clear completed
			</button>
		</footer>
	);
};

export default Footer;
