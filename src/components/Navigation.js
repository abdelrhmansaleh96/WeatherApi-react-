import React from "react";
import styled from "styled-components";
import { WiDaySunnyOvercast } from "react-icons/wi";
import Tilt from "react-tilt";

function Navigation() {
  let iconStyles = { color: "#cdfa1b", fontSize: "10em" };
  return (
    <Wrapper>
      <Tilt
        className="Tilt"
        options={{ max: 60 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          {" "}
          <WiDaySunnyOvercast style={iconStyles} />{" "}
        </div>
      </Tilt>

      <h1>Weather Forecasting</h1>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1.5em;
  height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 6.5em;
    color: #f5b514;
  }
`;

export default Navigation;
