import React from 'react';
import styled from 'styled-components';

const ScoreBox = ({scoreValue}) => {
    return (
        <Container>
            <h2>{scoreValue}</h2>
            <p>Total Score</p>
        </Container>
    );
}

export default ScoreBox;
const Container = styled.main`
width: 8.4375rem;
height: 8.4375rem;
display: flex;
flex-direction: column;
align-items: center;
    h2{
        width: 3.875rem;
        height: 7rem;
        color: #000;
        font-family: Poppins;
        font-size: 6.25rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
    p {
        color: #000;
        font-family: Poppins;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`
