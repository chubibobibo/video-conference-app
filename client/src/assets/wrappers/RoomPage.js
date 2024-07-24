import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 1fr 4fr;
  grid-template-columns: 1fr;
  grid-template-areas: "header" "content";

  .header {
    grid-area: header;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      font-size: 30px;
    }
  }

  .content {
    grid-area: content;

    p {
      font-size: 20px;
    }
  }
`;

export default Wrapper;
