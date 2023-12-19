import React, { useState } from 'react';
import ScoreBox from './ScoreBox';
import NumberSelectBox from './NumberSelectBox';
import styled from 'styled-components';
import RollDiceBox from './RollDiceBox';
import Roles from './Roles';

const GamePlay = () => {
  let [isShowRulesActive, setIsShowRulesActive] = useState(false)
  let [permission, setPermission] = useState(false)
  let [warningMsg, setWarningMsg] = useState(" ")
  let [scoreValue, setScoreValue] = useState(0)
  let [diceNumber, setDiceNumber] = useState(1)
  let [selectedNumber, setSelectedNumber] = useState()

  const showRules = () => {
    setIsShowRulesActive((prev) => !prev)
  }

  function roleDice(min, max) {
    if (permission) {
      let value = Math.floor(Math.random() * (max - min) + min);
      // console.log(value);

      setDiceNumber((prevDiceNumber) => {
        prevDiceNumber = value;
        let newDiceValue = prevDiceNumber;
        if (selectedNumber === newDiceValue) {
          setScoreValue((prev) => (prev + selectedNumber));
        } else {
          setScoreValue((prev) => (prev - 2))
        }
        return newDiceValue
      });
      setPermission((prev) => false)
      return Math.floor(Math.random() * (max - min) + min);
    } else {
      setWarningMsg("Please select a number")
    }
  }
  let resetScore = () => {
    setScoreValue(0)
  }

  const numberSelector = (val) => {
    setPermission((prev) => true)
    setWarningMsg(" ")
    setSelectedNumber(val)
  }

  return (
    <Container>

      <div className='upperDiv'>
        <ScoreBox scoreValue={scoreValue} />
        <NumberSelectBox warningMsg={warningMsg} numberSelector={numberSelector} />

      </div>
      <RollDiceBox resetScore={resetScore} diceNumber={diceNumber} roleDice={roleDice} showRules={showRules} isShowRulesActive={isShowRulesActive} />
      {isShowRulesActive ? <Roles /> : ""}

    </Container>
  );
}

export default GamePlay;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
.upperDiv {
  display: flex;
  justify-content: space-between;
  width: 80rem;
  align-items: center;
  margin: 0 auto;
  margin-top: 4rem;
}
`;
