import { Todo } from "../../../../types/types";
interface Props {
	setEditingMode: (isEditing: boolean) => void;
	updateTodo: (todo: Todo) => void;
	onDeleteTodo: (todo:Todo)=>void; 
	children : {todoItem : Todo};
}
const TodoViewMode = (props: Props) => {
	const {onDeleteTodo,  setEditingMode, updateTodo, children } = props;
	const{todoItem} = children ;
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
				<button className="destroy" onClick ={()=>onDeleteTodo(todoItem)} />
			</div>
		</li>
	);
};

export default TodoViewMode;
