import React, {useContext, useState} from "react";
import "./styles/App.css";
import TodoApp from './ui/todoApp/TodoApp';
import {AuthContext} from "./store/slices/authContext";
import {useTodos} from "./hooks/useTodos";

function App() {
    const [isAuth, setIsAuth]=useState(false);
    return (
        <>
            
            <AuthContext.Provider value={isAuth}>
                <TodoApp/>
            </AuthContext.Provider>
        </>
    )
}
``
export default App;