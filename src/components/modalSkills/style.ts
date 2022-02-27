import styled from "styled-components";

export const Backdrop = styled.div`
  background-color: rgb(169, 169, 169, 0.5);
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
`;

export const Container = styled.div`
  width: 50%;
  height: 700px;
  bottom: 10px;
  background-color: white;
  position: absolute;
  box-shadow: 2px 2px 5px;
  border-radius: 10px;
  z-index: 2;
  left: 25rem;
  button {
    background-color: #41d773;
    color: white;
    font-size: 1.2rem;
    position: relative;
    left: 40%;
    right: 50%;
    top: 50%;
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
export const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;
export const Bio = styled.div`
  text-align: center;
`;
export const Skills = styled.div``;
export const Repo = styled.div``;
export const Followers = styled.div``;
