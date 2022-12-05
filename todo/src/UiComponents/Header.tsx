import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../actions/list.actions";

function Header() {
	const inputRef = useRef<string | undefined>();
	const dispatch = useDispatch();
	const handleKeyDown = (event: React.KeyboardEvent) => {
		if (event.code === "Enter") {
			if (inputRef.current) {
				dispatch(addItem(inputRef.current.valueOf));
			}
		}
	};

	return (
		<header className="header">
			<h1>TODO</h1>
			<input
				className="new-todo"
				ref={inputRef as any}
				onKeyDown={handleKeyDown}
				placeholder="What needs to be done?"
				autoFocus
			/>
		</header>
	);
}

export default Header;
