import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;
  gap: 1.5rem;
  padding: 3rem;

  .calendar-link {
    color: blue;
    display: flex;
    gap: 0.5rem;
  }
`;

export default Wrapper;
