import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .register-container {
    width: 60rem;
    height: 40rem;
    background-color: #d5e5ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export default Wrapper;
