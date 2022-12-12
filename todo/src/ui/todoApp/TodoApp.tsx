import Header from "./TodoAppComponents/Header";
import Main from "./TodoAppComponents/main/Main";
import Footer from "./TodoAppComponents/Footer";
import React from "react";
import {TodosContext} from "../../store/slices/todosContext";
import {useTodos} from '../../hooks/useTodos';

function TodoApp() {
    const todosApi = useTodos();
    return(

        <TodosContext.Provider value={todosApi}>
            <section className="todoapp">
                <Header/>
                <Main/>
                <Footer/>
            </section>
        </TodosContext.Provider>
    )
}

export default TodoApp;