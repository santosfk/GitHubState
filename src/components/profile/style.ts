import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: -600px;
`;

export const Picture = styled.div`
  background-color: aliceblue;
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;

export const Name = styled.h1``;

export const Characteristics = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
export const BlockChar = styled.div`
  background-color: grey;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 170px;
  height: 120px;
  margin: 10px 200px;

  h1 {
    text-align: center;
    margin-bottom: -5px;
    position: relative;
  }
  h2 {
    position: relative;
    text-align: center;
    font-size: 2rem;
  }
`;

export const Bio = styled.div`
  text-align: center;
`;
