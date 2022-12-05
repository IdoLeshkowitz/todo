import {useSelector} from 'react-redux';
import { AppState } from '../types/types';
import React from 'react';
function Main () {
  const items = useSelector((state:AppState) => state.items);
  const isLoading = useSelector((state:AppState) => state.isLoading);

  return (
    <section className="main">
    <input className="toggle-all"
           type="checkbox" />
    <ul className="todo-list">
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        items.map( item => (
          <li>
          <div className="view">
            <input className="toggle"
                   type="checkbox" />
            <label>{item.title}</label>
            <button className="destroy" />
          </div>
          <input className="edit" />
        </li>
        ))
      )}
    
    </ul>
  </section>
  )
}

export default Main;