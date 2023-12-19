import React, { useState } from 'react';
import styled from 'styled-components';

const RollDiceBox = ({ showRules, isShowRulesActive, roleDice, diceNumber, resetScore }) => {


  return (
    <Container>
      <img onClick={() => roleDice(1, 7)} src={`/images/dice_${diceNumber}.png`} alt="dices" />
      <p>Click on Dice to roll</p>
      <Button2 onClick={resetScore}>Reset Score</Button2>
      <Button onClick={showRules}> {isShowRulesActive ? "Hide" : "Show"} Rules</Button>
    </Container>
  );
}

export default RollDiceBox;
const Container = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
    img {
      cursor: pointer;
    }

    p{
        color: #000;
        font-family: Poppins;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
        padding-top: 0.94rem;
        padding-bottom: 2.25rem;
    }
    Button {
        cursor: pointer;
        margin-bottom: 1.5rem;
    }

`
const Button = styled.button`
display: flex;
width: 13.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
/* gap: 1.5rem; */
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
const Button2 = styled.button`
display: flex;
width: 13.75rem;
padding: 0.625rem 1.125rem;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 0.3125rem;
background: #fff;
color: #000;
font-family: Poppins;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
border: 1px solid black;
transition: 0.4s background ease-in;
  &:hover {
    background-color: #000;
    border: 1px solid black;
    color: #fff;
    transition: 0.3s background ease-in;
  }
`