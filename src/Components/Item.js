import React from 'react';
import styled from 'styled-components';

const List = styled.li`
  border-radius: 3px;
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 24px;
  box-shadow: 2px 2px 4px #ccd3d7;
  margin-bottom: 18px;

  .task-holder {
    position: relative;
  }

  .checkbox {
    content: '';
    position: absolute;
    left: 0;
    border: 1px solid;
    height: 17px;
    width: 17px;
    top: 50%;
    transform: translateY(-35%);
    cursor: pointer;
  }

  .get-checked {
    ::after {
      content: '';
      position: absolute;
      left: 9px;
      top: -12px;
      right: 0px;
      bottom: 0;
      height: 25px;
      width: 9px;
      border-right: 3px solid #333;
      border-bottom: 3px solid #333;
      border-color: #2ecc71;
      transform: rotate(40deg);
    }
  }

  .task-text {
    margin-left: 30px;
  }

  button {
    background: transparent;
    display: flex;
    margin-left: auto;
  }
`;

const ListItem = ({ task, check, handleCheck, handleDelete }) => {
  return (
    <List>
      <span className="task-holder">
        <span
          onClick={handleCheck}
          className={`${check ? 'checkbox get-checked' : 'checkbox'}`}
        ></span>
        <span className="task-text">{task}</span>
      </span>

      <button onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          height="30px"
          width="30px"
        >
          <g fill="#e74c3c">
            <path d="M16 5s-1-2-4-2-4 2-4 2H5l.4 2h13.3l.3-2h-3zM9.4 5S10 4 12 4s2.6 1 2.6 1H9.4zM8 21h8l2.4-13H5.6z"></path>
          </g>
        </svg>
      </button>
    </List>
  );
};

export default ListItem;
