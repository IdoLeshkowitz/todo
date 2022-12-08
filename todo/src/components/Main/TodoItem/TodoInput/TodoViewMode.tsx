const TodoViewMode = (props: any) => {
	const { todoItem, setEditingMode } = props;
	const handleDoubleClick = () => {
		setEditingMode(true);
	};
	return (
		<li>
			<div>
				<input className="toggle" type="checkbox"  />
				<label onDoubleClick={handleDoubleClick}>{todoItem.title}</label>
				<button className="destroy" />
			</div>
		</li>
	);
};

export default TodoViewMode;
