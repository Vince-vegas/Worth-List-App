import styled from 'styled-components';

const TodoSelection = styled.div`
  margin-bottom: 30px;
  display: flex;

  @media screen and (max-width: 600px) {
    button {
      padding: 5px 10px;
      margin-right: 5px;
      font-size: 14px;
    }
  }
`;

export default TodoSelection;
