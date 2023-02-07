import React from 'react';
import Styled from 'styled-components';

const Wrapper = Styled.div`
 display: relative;
`;

const Button = Styled.button`
  cursor: pointer;
  height: 55px;
  width: 55px;   
  border-radius: 50%;
  border: none;
  background-color: transparent;
  &:focus {
      outline: none;
  }
  transition: all .5s ease;
`;

const Toggle = ({ icon, theme, toggleTheme }) => {
  
 return (
       <Wrapper>
         <Button onClick={toggleTheme}>{icon}</Button>
       </Wrapper>
 )
}

export default Toggle;