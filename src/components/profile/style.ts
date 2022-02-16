import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@1,200&display=swap");
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 15rem;
  right: 50%;
  left: 50%;
  color: white;
  z-index: 1;
  position: absolute;
`;

export const Picture = styled.img`
  background-color: aliceblue;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 1px solid transparent;
  outline: none;
  :hover {
    border: 1px solid #bde038;
  }
`;

export const Name = styled.h1``;

export const Characteristics = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const BlockChar = styled.div`
  background-color: transparent;
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 12rem;
  height: 15%;
  margin: 10px 15rem;
  transition: 0.5s;
  :hover {
    border: 1px solid #bde038;
  }

  h1 {
    font-size: 1.5rem;
    text-align: center;
    margin-bottom: -5px;
    position: relative;
  }
  h2 {
    color: #bde038;
    position: relative;
    text-align: center;
    font-size: 2.3rem;
  }
  @media (max-width: 1024px) {
    margin: 10px 5rem;
    h1 {
      font-size: 1rem;
    }
    h2 {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 1440px) {
    margin: 10px 10rem;
  }
`;

export const Bio = styled.div`
  text-align: center;
  margin-top: 2rem;
  width: 20rem;
  font-size: 1.5rem;
`;
