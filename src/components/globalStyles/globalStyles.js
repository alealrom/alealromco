import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
  }

  h1 {
    font-weight: bolder;
    font-size: 3.2rem;
  }

  h2, h3 {
    font-family: 'Frank Ruhl Libre', serif;
    font-weight: 900;
    letter-spacing: 2px;
  }

  p {
    font-family: 'Poppins', sans-serif;
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
    transition: 0.4s;
  }
  
  a {
    color: ${({ theme }) => theme.text};
    text-decoration: none;
  }

  a:hover {
   color: ${({ theme }) => theme.hover};
   text-decoration: underline;
   transition: 0.4s;
  }

  article {
    background-color: ${({ theme }) => theme.background};
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 2rem;
    }
  }
`;
