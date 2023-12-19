import styled from 'styled-components'
import React from 'react';

const StartGame = ({toggle}) => {
    return (
        <Container>
            <div className="left">
                <img src="/images/dices 1.png" alt="dices picture" />
            </div>
            <div className="right">
                <h1>DICE GAME</h1>
                <Button onClick={toggle}>Play Now</Button>
            </div>
        </Container>
    );
}

export default StartGame;
const Container = styled.main`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 100vh;

    .right h1 {
        color: #000;
        font-family: Poppins;
        font-size: 6rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
`

const Button = styled.button`
display: flex;
width: 13.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 0.625rem;
border-radius: 0.3125rem;
background: #000;
color: #FFF;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
border: 1px solid black;
transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: black;
    transition: 0.3s background ease-in;
  }
`