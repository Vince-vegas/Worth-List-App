import styled from 'styled-components';

const TodosHolder = styled.div`
  max-width: 535px;
  margin: 40px auto 0;
  background: #fff;
  padding: 20px;
  border-radius: 3px;
  min-height: 400px;

  @media screen and (max-width: 600px) {
    max-width: 325px;
    padding: 20px 10px;
  }
`;

export default TodosHolder;
