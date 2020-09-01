import { createGlobalStyle } from 'styled-components';

export const GlobalStyled = createGlobalStyle`
    *, ::before, ::after {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        margin: 0;
        background: #34495e;
        color: #34495e;
    }

    ul {
        padding: 0;
        margin: 0;
        list-style: none;
    }
    
    button, input {
        outline: none;
        border: none;
    }

    button {
        cursor: pointer;
    }
`;
