/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useState, useEffect } from 'react';
import todosAction, { todosState } from './ContextReducer';
import { useImmerReducer } from 'use-immer';

export const Context = createContext();

const TodosProvider = (props) => {
  const [task, setTask] = useState('');
  const [state, dispatch] = useImmerReducer(todosAction, todosState);
  const { currentType, currentTodos, allTodos } = state;

  // Add a new todo
  const submitTask = (e) => {
    if(task.length > 0){
     const id = Math.floor(Math.random() * 1000000);

    if (currentType === 'all') {
      dispatch({ type: 'add-new-todo', id, task });
    }
    if (currentType === 'active') {
      dispatch({ type: 'add-active-todo', id, task });
    }
    if (currentType === 'completed') {
      dispatch({ type: 'add-checked-todo', id, task });
    }

    setTask('');
    }
    e.preventDefault();
  };

  // delete a todo
  const deleteTodo = (id) => {
    dispatch({ type: 'delete-todo', id });
  };

  // all, active, completed todos

  const setCurrentAll = () => {
    dispatch({ type: 'set-current-all' });
  };

  const setCurrentActive = () => {
    dispatch({ type: 'set-current-active' });
  };

  const setCurrentCompleted = () => {
    dispatch({ type: 'set-current-completed' });
  };

  /*
  
  
  */

  // Check a todo item
  const checkedTodos = (id) => {
    dispatch({ type: 'checked-a-todo', id });
  };

  // cleared Todos
  const emptyTodos = () => {
    dispatch({ type: 'empty-todos' });
  };

  // handle add input
  const handleTask = (e) => {
    setTask(e.target.value);
  };

  // get stored todos
  const setTodosFromStored = () => {
    const todosStored = JSON.parse(localStorage.getItem('todos'));

    if (todosStored) {
      dispatch({
        type: 'set-todos-stored',
        currentTodos: todosStored,
        allTodos: todosStored,
      });
    }
  };

  // Get Todos when the App mounted
  useEffect(() => {
    setTodosFromStored();
  }, []);

  // Store item when the given dependency is called || component rerender
  useEffect(() => {
    //
    localStorage.setItem('todos', JSON.stringify(allTodos));
  }, [allTodos]);

  return (
    <Context.Provider
      value={{
        task,
        handleTask,
        submitTask,
        setCurrentAll,
        setCurrentActive,
        setCurrentCompleted,
        checkedTodos,
        deleteTodo,
        emptyTodos,
        currentType,
        currentTodos,
        allTodos,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};

export default TodosProvider;
