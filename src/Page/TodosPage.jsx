import React, { useContext } from 'react';
import { Context } from '../TodoContext/Context';
import TodosHolder from '../Components/TodosHolder';
import Heading from '../Components/Heading';
import TodoForm from '../Components/TodoForm';
import TodoInput from '../Components/TodoInput';
import TodoSelection from '../Components/TodoSelection';
import Button from '../Components/Button';
import ListItem from '../Components/Item';

const TodosPage = () => {
  const context = useContext(Context);
  const {
    task,
    handleTask,
    submitTask,
    currentTodos,
    setCurrentAll,
    setCurrentActive,
    setCurrentCompleted,
    checkedTodos,
    deleteTodo,
    emptyTodos,
    currentType,
  } = context;

  return (
    <TodosHolder>
      <Heading>Worth List App</Heading>

      <TodoForm onSubmit={submitTask}>
        <TodoInput inputValue={task} handleChange={handleTask} />
      </TodoForm>

      <TodoSelection>
        <Button
          className={`${currentType === 'all' ? 'selected-btn' : 'test'}`}
          onClick={setCurrentAll}
        >
          All
        </Button>
        <Button
          className={`${currentType === 'active' ? 'selected-btn' : 'test'}`}
          onClick={setCurrentActive}
        >
          Active
        </Button>
        <Button
          className={`${currentType === 'completed' ? 'selected-btn' : 'test'}`}
          onClick={setCurrentCompleted}
        >
          Completed
        </Button>
        <Button onClick={emptyTodos}>Cleared Todos</Button>
      </TodoSelection>

      <div>
        <ul>
          {currentTodos.map((item) => {
            const { id, checked, task } = item;
            return (
              <ListItem
                key={id}
                check={checked}
                task={task}
                handleCheck={checkedTodos.bind(this, id)}
                handleDelete={deleteTodo.bind(this, id)}
              />
            );
          })}
        </ul>
      </div>
    </TodosHolder>
  );
};

export default TodosPage;
