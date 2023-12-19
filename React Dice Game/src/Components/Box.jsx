import React from 'react';
import styled from 'styled-components';

const Box = ({ selectNumber }) => {
  const diceValue = [1, 2, 3, 4, 5, 6]



  return (
    <Container>
      {diceValue.map((value, i) => (
        <div onClick={() => selectNumber(value)} key={i}>{value}</div>
      ))}
    </Container>
  );
}

export default Box;
const Container = styled.main`
display: flex;
gap: 1.5rem;
div{
display: flex;
width: 4.5rem;
height: 4.5rem;
padding: 1.125rem 0rem;
justify-content: center;
align-items: center;
border: 1px solid #000;
background: #FFF;
color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
&:hover {
    color: #fff;
    background: #000;
    cursor: pointer;
}
}
`;