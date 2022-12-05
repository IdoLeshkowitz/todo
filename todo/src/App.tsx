import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { loadItems } from "./actions/list.actions";
import "./styles/App.css";
import Header from "./UiComponents/Header";
import Main from "./UiComponents/Main";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadItems);
	}, []);
	return (
		<section className="todoapp">
			<Header />
			<Main />
			<footer className="footer">
				<span className="todo-count">
					<strong>0</strong> items left
				</span>
				<button className="clear-completed">clear completed</button>
			</footer>
		</section>
	);
}

export default App;
