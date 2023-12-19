import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const ButtomSection = ({ filterData }) => {
    // console.log(filterData);
    let [data, setData] = useState(null);
    let [datafilter, setDataFilter] = useState(null);

    const BASE_URL = "http://localhost:9000"
    useEffect(() => {
        const serverRequest = async () => {
            try {
                const response = await fetch(BASE_URL);
                const json = await response.json()
                setData(json)
            } catch (error) {
                console.log("Error Found:" + JSON.stringify(error));
            }
        }
        serverRequest()
        data?.map((value) => {
            if (value.name.toLowerCase() === filterData.toLowerCase()) {
                setDataFilter(data)
            }
        })
        console.log(datafilter);
    }, [filterData]);
    return (
        <Container>
            <div className="innerContainer">
                {
                    data?.map(({ name, image, text, price }) => (
                        <Card key={name}>
                            <div className="left">
                                <img src={BASE_URL + image} alt="images" />
                            </div>
                            <div className="right">
                                <h3>{name}</h3>
                                <p>{text}</p>
                                <button>{`${price.toFixed(2)}`}</button>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </Container>
    );
}

export default ButtomSection;
const Container = styled.main`
    padding-top: 2rem;
    padding-bottom: 2rem;
    background-image: url(./images/bg.png);
    background-size: cover;
    min-height: calc(100vh - 15.0656rem);
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    .innerContainer {
        display: flex;
    justify-content: center;
    align-items: center;
    max-width: 60%;
    gap: 1.25rem;
    flex-wrap: wrap;
    }
`
const Card = styled.main`
    width: 21.25rem;
    height: 10.4375rem;
    flex-shrink: 0;
    border-radius: 1.21544rem;
    border: 0.659px solid #98F9FF;
    border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

    background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
    background-blend-mode: overlay, normal;
    backdrop-filter: blur(13.1842px);
    display: flex;
    justify-content: space-around;
    align-items: center;

img {
    width: 8.3125rem;
height: 8.3125rem;
flex-shrink: 0;
}
h3 {
    color: #FFF;
font-family: Inter;
font-size: 1rem;
font-style: normal;
font-weight: 600;
line-height: normal;
}
p {
    width: 10.5rem;
height: 3.6875rem;
color: #FFF;
font-family: Inter;
font-size: 0.75rem;
font-style: normal;
font-weight: 400;
line-height: normal;
}
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
        float: right;
        &:hover {
            outline: 1px solid white;
    background-color: #f22f2f;
  }
    }
`