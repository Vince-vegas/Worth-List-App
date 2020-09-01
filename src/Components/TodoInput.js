import React, { Fragment } from 'react';

const TodoInput = ({ inputValue, handleChange }) => (
  <Fragment>
    <input
      type="text"
      name="add task"
      placeholder="Add a new task"
      autoComplete="off"
      value={inputValue}
      onChange={handleChange}
    />
    <button type="submit">Submit</button>
  </Fragment>
);

export default TodoInput;
