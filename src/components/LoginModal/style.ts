import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Smooch+Sans&display=swap");
  font-family: "Smooch Sans", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: white;
  top: 0;
  color: white;
  h3 {
    color: #41d773;
    margin-bottom: -2px;
    margin: auto;
    font-size: 2rem;
    transition: 0.4s;
  }
  h3:hover {
    color: #12e7c4;
  }
  h2 {
    text-align: center;
    margin-top: -3px;
    color: black;
  }
`;
export const Img = styled.img`
  border-radius: 50%;
  width: 200px;
  margin-top: 50px;
  border: solid 2px #41d773;
`;
export const Name = styled.h1``;
export const Login = styled.h2`
  margin-top: -10px;
  color: #41d773;
`;
export const Infos = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
export const Id = styled.h2`
  margin-right: 200px;
  text-align: center;
`;
export const Repos = styled.div`
  margin-left: 200px;
  font-size: 2rem;
`;

export const Branding = styled.div`
  display: flex;
  align-items: center;
  align-items: center;
  margin-top: 30px;
`;
export const Followers = styled.div`
  font-size: 2rem;
  margin-right: 23rem;
`;

export const Following = styled.div`
  font-size: 2rem;
  margin-left: 2rem;
`;
export const Bio = styled.div`
  margin-top: 20px;
  font-size: 2rem;
  color: #41d773;
`;
