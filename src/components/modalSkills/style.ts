import styled from "styled-components";

export const Container = styled.div`
  width: 800px;
  height: 700px;
  bottom: 10px;
  background-color: white;
  position: absolute;
  box-shadow: 2px 2px 3px;
  z-index: 2;
  button {
    background-color: #41d773;
    color: white;
    font-size: 1.2rem;
    position: relative;
    left: 40%;
    right: 50%;
    top: 90%;
    width: 150px;
    height: 50px;
    border: none;
    outline: none;
    font-weight: bold;
    transition: 0.5s;
  }
  button:hover {
    border-radius: 10px;
    letter-spacing: 3px;
  }
`;
