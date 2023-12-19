import React from 'react';
import styled from 'styled-components';

const Button = ({ values }) => {
    return (
        <ButtonComponent>
            {
                values.map((value, index) => {
                    return <button key={index}>{value}</button>
                })
            }
        </ButtonComponent>
    );
}

export default Button;
const ButtonComponent = styled.main`
        display: flex;
        gap: 0.75rem;
        justify-content: center;
        margin-top: 3.38rem;
    button {
        display: flex;
        padding: 0.375rem 0.75rem;
        align-items: flex-start;
        gap: 0.625rem;
        border-radius: 0.3125rem;
        background: #FF4343;
        color: #FFF;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        border: none;
        cursor: pointer;
        &:hover {
            outline: 1px solid white;
    background-color: #f22f2f;
  }
    }
`