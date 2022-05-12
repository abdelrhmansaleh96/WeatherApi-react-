import React, { useRef, useState } from "react";
import styled from "styled-components";

function Main(props) {
  const [temp, setTemp] = useState("");
  const [des, setDes] = useState("");
  const ref1 = useRef();
  const ref2 = useRef();
  const getData = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${ref1.current.value}&lon=${ref2.current.value}&appid=4db7bf64fcb90094d161a5ecafefcd45`
      );
      const data = await response.json();
      setTemp(data.main.temp);
      setDes(data.weather[0].description);
      console.log(data, temp);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Wrapper>
      <h2>Lets See what is the Weather like</h2>
      <form>
        <label htmlFor="lat">Please enter the latitude</label>
        <input ref={ref1} className="input" key="lat" type="text" />
        <label htmlFor="lon">Please enter the longitude</label>
        <input ref={ref2} className="input" key="lon" type="text" />
      </form>
      <button onClick={getData} className="button-18" type="submit">
        Get me the Weather
      </button>
      {temp && (
        <div className="temp">
          <span>{temp}</span> f
        </div>
      )}
      {temp && (
        <div className="temp">
          And it is <span>{des}</span>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 1.5em;
  padding: 1.5em;
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  align-content: center;
  align-items: center;
  justify-items: center;
  gap: 2em;
  label {
    font-size: 1.5em;
  }
  .input {
    font-size: 16px;
    font-size: max(16px, 1em);
    font-family: inherit;
    padding: 0.25em 0.5em;
    background-color: #fff;
    border: 2px solid var(--input-border);
    border-radius: 4px;
    margin: 1em;
  }

  .button-18 {
    align-items: center;
    background-color: #0a66c2;
    border: 0;
    border-radius: 100px;
    box-sizing: border-box;
    color: #ffffff;
    cursor: pointer;
    display: inline-flex;
    font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto,
      "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell,
      "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol",
      "Lucida Grande", Helvetica, Arial, sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 20px;
    max-width: 480px;
    min-height: 40px;
    min-width: 0px;
    overflow: hidden;
    padding: 0px;
    padding-left: 20px;
    padding-right: 20px;
    text-align: center;
    touch-action: manipulation;
    transition: background-color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
      box-shadow 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s,
      color 0.167s cubic-bezier(0.4, 0, 0.2, 1) 0s;
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .button-18:hover,
  .button-18:focus {
    background-color: #16437e;
    color: #ffffff;
  }

  .button-18:active {
    background: #09223b;
    color: rgb(255, 255, 255, 0.7);
  }

  .button-18:disabled {
    cursor: not-allowed;
    background: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.3);
  }
  .temp {
    font-size: 5em;
  }
  span {
    color: #0dd477;
  }
`;

export default Main;
