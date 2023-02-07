import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h2, h3 {
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 900;
    letter-spacing: 2px;
  }

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 1.063rem;
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
  
  a {
    color: ${({ theme }) => theme.text};
  }

  a:hover {
   color: ${({ theme }) => theme.hover};
  }

  article {
    background-color: ${({ theme }) => theme.background};
  }
`