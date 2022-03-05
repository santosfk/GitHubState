import styled from "styled-components";
export const Content = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:ital,wght@1,300&display=swap");
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  height: 550px;
  width: 600px;
  margin: auto;
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    height: 50px;
    margin-top: 2rem;
    width: 80%;
    border: none;
    background: linear-gradient(
      90deg,
      rgba(2, 0, 36, 1) 0%,
      rgba(31, 194, 2, 1) 0%,
      rgba(20, 181, 154, 1) 60%,
      rgba(74, 147, 236, 1) 100%
    );
    color: white;
    font-size: 2rem;
    letter-spacing: 3px;
    transition: 0.5s;
  }
  button:hover {
    background: #41d773;
    border: 1px solid #41d773;
    color: white;
  }
`;
export const Title = styled.h1`
  font-family: "Rubik", sans-serif;
  text-align: center;
  color: #41d773;
  font-size: 3rem;
`;
export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 4rem;
  input {
    border: none;
    outline: none;
    background-color: #41d773;
    width: 500px;
    color: white;
    padding: 5px;
    font-size: 1rem;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
    transition: 0.5s;
  }
  input:focus {
    border-radius: 25px;
  }
  input::placeholder {
    color: white;
  }
`;
export const User = styled.input`
  height: 50px;
  margin-bottom: 2rem;
`;
export const Name = styled.input`
  height: 50px;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
`;
