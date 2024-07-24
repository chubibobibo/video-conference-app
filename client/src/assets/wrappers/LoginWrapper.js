import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 10rem;

  .login-container {
    width: 30rem;
    height: 40rem;
    background-color: #d5e5ff;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    flex-direction: column;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin-top: -10rem;
    margin-bottom: 5rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default Wrapper;
