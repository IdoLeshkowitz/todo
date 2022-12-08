const Footer = (props: any) => {
	const { onClearCompleted, todos } = props;
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
