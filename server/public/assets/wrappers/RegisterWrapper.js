import styled from "styled-components";

const Wrapper = styled.div`
  max-height: 100vh;
  max-width: 100vw;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10rem;

  .register-container {
    width: 50%;
    height: 55rem;
    background-color: #d5e5ff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
  }
  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 45px;
    margin-top: -10rem;
    margin-bottom: 2rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
  }
`;

export default Wrapper;
