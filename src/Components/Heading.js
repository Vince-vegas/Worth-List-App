import styled from 'styled-components';

const Heading = styled.h1`
  font-size: 30px;
  color: #e74c3c;
  text-align: center;
  padding: 10px 0 40px;

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 25px;
    }
  }
`;

export default Heading;
