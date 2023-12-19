import React, { useState } from 'react';
import styled from 'styled-components';
import Box from './Box';

const NumberSelectBox = ({ numberSelector, warningMsg }) => {

    let [numberMsgValue, setNumberMsgValue] = useState("Select Number")

    const selectNumber = (val) => {
        if (val) {
            setNumberMsgValue(`Selected Number is: ${val}`)
            numberSelector(val)
        }
    }

    return (
        <Container>
            <span>{warningMsg}</span>
            <div>
                <Box selectNumber={selectNumber} />
            </div>
            <p>{numberMsgValue}</p>
        </Container>
    );
}

export default NumberSelectBox;
const Container = styled.main`
    width: 34.5rem;
    display: flex;
    align-items: end;
    flex-direction: column;
    gap: 1.88rem;
div {
        display: flex;
    gap: 1.5rem;    
}
span {
    color: red;
    font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}
    
p{
    color: #000;
font-family: Poppins;
font-size: 1.5rem;
font-style: normal;
font-weight: 700;
line-height: normal;
}
`;