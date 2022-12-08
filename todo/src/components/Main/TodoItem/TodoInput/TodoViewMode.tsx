import { Todo } from "../../../../types/types";
interface Props {
	todoItem: Todo;
	setEditingMode: (isEditing: boolean) => void;
	updateTodo: (todo: Todo) => void;
}
const TodoViewMode = (props: Props) => {
	const { todoItem, setEditingMode, updateTodo } = props;
	const onDoubleClick = () => {
		setEditingMode(true);
	};
	const onCompleteToggle = () => {
		const updatedTodo = { ...todoItem, completed: !todoItem.completed };
		updateTodo(updatedTodo);
	};

	return (
		<li>
			<div>
				<input
					className="toggle"
					type="checkbox"
					checked={todoItem.completed}
					onChange={onCompleteToggle}
				/>
				<label onDoubleClick={onDoubleClick}>{todoItem.title}</label>
				<button className="destroy" />
			</div>
		</li>
	);
};

export default TodoViewMode;
