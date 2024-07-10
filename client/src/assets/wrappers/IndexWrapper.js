import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 4fr 2fr;
  grid-template-areas: "top-bar" "middle" "bottom-bar";
  overflow-y: scroll;

  .top-bar {
    /* background-color: red; */
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../src/assets/office.jpg");
    height: 20rem;
    width: 100%;
    background-position: 25% 75%; /** sets the position of the image */
    opacity: 0.8;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    h2 {
      font-size: 3rem;
      color: white;
      font-weight: 500;
      text-shadow: #444447;
    }

    p {
      font-size: 2rem;
      color: white;
      font-weight: 400;
      text-shadow: #444447;
    }

    .start-conf-container {
      height: 6rem;
      width: 35rem;
      border-radius: 5px;
      background-color: white;
      display: flex;
      justify-content: center;
      padding: 10px;
    }
  }
  //** middle content */
  .middle {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    .meeting {
      height: 55%;
      width: 40%;
      background-color: #d5e5ff;
      border-radius: 10px;
      margin: 1rem;
      display: grid;
      /** divide the div into 2 columns and 2 rows with the second row taking up both columns */
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 5fr;
      grid-template-areas: "upcoming recent" "content content";

      .link-upcoming {
        display: flex;
        justify-content: center;
        align-items: center;

        .button-upcoming {
          color: #2d63ff;
          background-color: #c7ddff;
          width: 19.5vw;
        }
        .button-upcoming:focus {
          background-color: white;
        }
      }

      .link-recent {
        display: flex;
        justify-content: center;
        align-items: center;

        .button-recent {
          color: #2d63ff;
          background-color: #c7ddff;
          width: 19.5vw;
        }
        .button-recent:focus {
          background-color: white;
        }
      }
    }
    .info {
      height: 45%;
      width: 40%;
      background-color: #444447;
      border-radius: 10px;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 1fr 3fr 2fr;
      grid-template-areas: "info-top" "info-middle" "info-bottom";
      margin: 1rem;

      .info-top {
        grid-area: info-top; /** Sets the position of the div depending on the named area specified */
        display: flex;
        padding: 1rem;
        align-items: center;
        color: white;
        .info-box-icon {
          height: 2rem;
          width: 2rem;
          background-color: red;
          margin-right: 1rem;
          color: white;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .info-middle {
        grid-area: info-middle;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        color: white;
        padding: 1.5rem;

        h3 {
          font-size: 32px;
          margin-bottom: 2rem;
        }
      }
      .info-bottom {
        grid-area: info-bottom;
        display: flex;
        justify-content: start;
        padding-left: 1rem;
        padding-bottom: 9rem;
      }
    }
  }

  /** Bottom content */
  .bottom-bar {
    background-color: black;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr 2fr;
    grid-template-areas: "first" "second" "third" "fourth";
    color: white;
    justify-items: center;
    /* height: 100%; */

    .bottom-first {
      grid-area: first;
      display: flex;
      justify-content: start;
      align-items: center;

      .bottom-appstore {
        /* background-color: red; */
        width: 8rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 5px;
        display: flex;

        .button-appstore {
          object-fit: cover;
          max-width: 8rem;
          justify-self: center;
          position: relative;
          transform: translateY(-10px);
          /* transform: translateX(10px); */
        }
      }
      .bottom-googleplay {
        /* background-color: red; */
        width: 8rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 5px;
        display: flex;

        .button-googleplay {
          object-fit: cover;
          max-width: 8rem;
          justify-self: center;
          position: relative;
        }
      }
      .bottom-fdroid {
        width: 8rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 5px;

        .button-fdroid {
          object-fit: cover;
          max-width: 8rem;
          justify-self: center;
          position: relative;
          transform: translateY(-25px);
        }
      }
    }

    .bottom-second {
      grid-area: second;
      display: flex;
      justify-content: start;
      align-items: center;

      .bottom-second-slack {
        background-color: gray;
        width: 8rem;
        height: 3rem;
        margin: 1rem;
        border-radius: 5px;
        padding: 10px;
      }
    }

    .bottom-third {
      grid-area: third;
      display: flex;
      justify-content: center;
      align-items: center;

      .img-facebook {
        height: 2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .img-twitter {
        height: 2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
      .img-instagram {
        height: 2rem;
        margin-left: 0.5rem;
        margin-right: 0.5rem;
      }
    }

    .bottom-fourth {
      grid-area: fourth;
      /* width: 50%; */
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;

      .info-box-icon {
        height: 2rem;
        width: 2rem;
        background-color: red;
        margin-right: 1rem;
        color: white;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
`;

export default Wrapper;
