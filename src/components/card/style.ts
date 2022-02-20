import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Signika:wght@300&display=swap");
  font-family: "Signika", sans-serif;
  background-color: #0c8b37;
  width: 300px;
  height: 380px;
  margin: auto;
  margin-top: 5rem;
  border: 1px solid #bde038;
  border-radius: 25px;
  padding: 1.5rem 2rem;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Picture = styled.img`
  width: 100px;
  border-radius: 50%;
`;
export const Name = styled.h1`
  font-size: 1rem;
  color: white;
`;
export const Infos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Content = styled.div`
  text-align: center;
  margin: 10px 50px;
  h1 {
    font-weight: bold;
    color: white;
    font-size: 1.3rem;
  }
  h2 {
    margin-top: -5px;
    font-size: 2.5rem;
  }
`;
export const Info = styled.button`
  background-color: black;
  margin-top: 1rem;
  width: 200px;
  height: 40px;
  color: #04e000;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 3px;
  transition: 0.4s;
  :hover {
    border-radius: 15px;
    letter-spacing: 1px;
  }
`;
export const MoreSkills = styled.h1`
  position: relative;
  bottom: -20px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.4s;
  :hover {
    color: #04e000;
  }
`;
