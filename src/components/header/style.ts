import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 90px;
  @import url("https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200&display=swap");
  background-color: black;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  display: flex;
  justify-content: space-around;
  font-family: "Source Sans Pro", sans-serif;

  h1 {
    transition: 0.5s;
    color: #04e000;
  }
  h1:hover {
    color: white;
    transform: translateY(5px);
  }
  .link {
    text-decoration: none;
  }
`;
