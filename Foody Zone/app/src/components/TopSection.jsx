import React from 'react';
import styled from 'styled-components'
import Button from './Button';

const TopSection = ({searchValue}) => {
    const typesOfButton = ["All", "Breakfast", "Lunch", "Dinner"] 
    let searchValue2 = (e) => {
        searchValue(e.target.value)
    }

    return (
        <Container>
            <MainContainer>
                <div className="logo">
                    <img src="./svg/Foody Zone.svg" alt="logo" />
                </div>
                <div className="searchInput">
                    <input onChange={searchValue2} type="text" placeholder='Search Food....' />
                </div>

            </MainContainer>
            <Button values={typesOfButton}/>
        </Container>
    );
}

export default TopSection;
const Container = styled.main`
max-width: 75rem;
margin: 0 auto;
    padding: 5.31rem 0rem 1.94rem 0rem;
    @media (0 < width < 600px) {
        padding: 5.31rem 1.5rem 1.94rem 1.5rem;
  }
`

const MainContainer = styled.main`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .searchInput input {
    margin: 0 auto;
        display: flex;
        padding: 0.6875rem 5.8125rem 0.625rem 0.9375rem;
        align-items: center;
        border-radius: 0.3125rem;
        border: 1px solid #FF0909;
        background: transparent;
        outline: none;
        color: #FFF;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        &::placeholder {
            color: #FFF;
        } 
 }
`