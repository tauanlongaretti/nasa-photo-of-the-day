import React from "react";
import Apod from "./Components/Apod/Apod"
import Info from "./Components/Info/Info"
import styled from 'styled-components';

const WrapperDiv = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-color: #d9d9d9;
  font-size: 2.5vw;
  max-width: 80%;
  margin: 5% auto;
  line-height: 1.5;
  padding: 5%;
`;

const Header = styled.h2`
  margin: 0% 5%;
`;

function App() {
  return (
    <WrapperDiv>
      <div>
      <Header>
        🚀 Welcome to Tauan's NASA Photo of The Day App! 🚀
      </Header>
      <Apod />
      <Info />
      </div>
    </WrapperDiv>
  );
}

export default App;
