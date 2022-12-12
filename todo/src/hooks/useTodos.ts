import {useState} from "react";
import {Todo} from "../types/types";

export const useTodos=()=>{
    const [todos, setTodos] = useState<Todo[]>([]);
    const onUpdateTodo = (updatedTodo: Todo) => {
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
    const onClearCompleted = () => {
        const newTodos = todos.filter((todo) => !todo.completed);
        setTodos(newTodos);
    };
    const onDeleteTodo = (todoToDelete: Todo) => {
        // accepts todo object and setTodos with filtered todos
        const newTodos = todos.filter((todo) => todo !== todoToDelete);
        setTodos(newTodos);
    };
    return {todos, setTodos, onUpdateTodo, addTodo, onClearCompleted, onDeleteTodo}
}