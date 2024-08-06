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
    display: flex;
    justify-content: center;

    p {
      font-size: 20px;
    }

    .content-header {
    }

    .content-contents {
    }
  }

  .call-btn {
    /* height: 2rem;
    width: 6rem;
    background-color: red;
    margin: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    border: 1px solid gray; */
    display: flex;
    position: relative;
    background-color: #04aa6d;
    border: none;
    font-size: 20px;
    color: #ffffff;
    padding: 15px;
    width: 10rem;
    text-align: center;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    text-decoration: none;
    overflow: hidden;
    cursor: pointer;
    margin: 1rem;
    border-radius: 10px;
    gap: 5px;
  }

  .call-btn:after {
    content: "";
    background: #90ee90;
    display: block;
    position: absolute;
    padding-top: 300%;
    padding-left: 350%;
    margin-left: -20px !important;
    margin-top: -120%;
    opacity: 0;
    transition: all 0.8s;
  }

  .call-btn:active:after {
    padding: 0;
    margin: 0;
    opacity: 1;
    transition: 0s;
  }
  .call-btn:hover {
    background-color: #90ee99;
  }

  .btn-container {
    display: flex;
    justify-content: center;
  }
`;

export default Wrapper;
