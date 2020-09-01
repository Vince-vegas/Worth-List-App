import React from 'react';
import styled from 'styled-components';

const TodoForm = styled.form`
  display: flex;
  flex-wrap: nowrap;
  border-radius: 33px;
  overflow: hidden;
  border: 1px solid #4cb3f8;
  margin-bottom: 35px;

  input {
    flex-basis: 80%;
    padding: 10px 15px;
    font-size: 18px;
  }

  button {
    flex-basis: 20%;
    border-radius: 33px;
    font-size: 18px;
    color: #fff;
    background: #4cb3f8;
  }
`;

export default React.memo(TodoForm);
