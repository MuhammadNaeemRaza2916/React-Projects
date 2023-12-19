import React from 'react';
import styled from 'styled-components';

const Roles = () => {
    return (
        <Container>
            <h3>How to play dice game</h3>
            <div className="para">
                <p>Select any number</p>
                <p>Click on dice image</p>
                <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
                <p>if you get wrong guess then  2 point will be dedcuted </p>
            </div>
        </Container>
    );
}

export default Roles;
const Container = styled.main`
    display: inline-flex;
    padding: 1.25rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    background: #FBF1F1;
    h3 {
        color: #000;
        font-family: Poppins;
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
    }
    p{
        color: #000;
        font-family: Poppins;
        font-size: 1rem;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
    }
`