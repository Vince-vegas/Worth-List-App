import styled from 'styled-components';

const Button = styled.button`
  background: #fff;
  color: #34495e;
  font-size: 16px;
  margin-right: 10px;
  box-shadow: 1px 3px 10px #a7b7c9;
  padding: 5px 18px;
  border-radius: 33px;

  &.selected-btn {
    background: #e74c3c;
    color: #fff;
  }

  &:last-child {
    margin-left: auto;
  }
`;

export default Button;
