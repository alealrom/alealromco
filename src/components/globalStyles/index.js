import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  ul {
    display: flex;
    list-style: none;
    align-content: center;
    align-items: center;
    justify-content: space-between;
    padding: 0;
  }

  svg {
    fill: ${({ theme }) => theme.svg};
  }

  svg:hover {
    fill: ${({ theme }) => theme.hover};
  }
  
  a:hover {
   color: ${({ theme }) => theme.hover};
  }
`