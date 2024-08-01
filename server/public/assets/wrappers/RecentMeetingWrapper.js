import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 100vh;

  /* gap: 1.5rem;
  padding: 3rem; */

  .meeting-element-container {
    max-height: 4rem;
    width: 99%;
    margin-bottom: 8px;
    border-radius: 5px;
    background-color: white;
    display: grid;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 1fr 1fr;
    grid-template-areas: "date meetingName" "time finishTime";

    .meeting-date {
      grid-area: date;
      font-weight: 600;
      cursor: pointer;
    }
    .meeting-name {
      grid-area: meetingName;
      font-weight: 600;
      cursor: pointer;
    }
    .meeting-time {
      grid-area: time;
      cursor: pointer;
    }
    .meeting-finish {
      grid-area: finishTime;
      cursor: pointer;
    }
  }

  /** applies hover background color change to each meeting container */
  .meeting-element-container:hover {
    background-color: #c7ddff;
  }
`;

export default Wrapper;
