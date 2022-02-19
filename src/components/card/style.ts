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
  border-radius: 20px;
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
export const Info = styled.span`
  color: #04e000;
`;
