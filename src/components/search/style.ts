import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  input {
    margin: 5px 15px;
    width: 500px;
    border: solid 1px #bde038;
    outline: none;
    border-radius: 10px;
    color: white;
    background-color: transparent;
    font-size: 1.2rem;
    transition: ease 0.5s;
    :focus {
      padding: 15px;
    }
    ::placeholder {
      color: #506266;
    }
  }
  .icon {
    margin: 15px;
    font-size: 1.5rem;
    color: #bde038;
  }
`;
