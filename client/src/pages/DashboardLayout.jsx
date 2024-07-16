/** Importing styled components */
import Wrapper from "../assets/wrappers/IndexWrapper.js";

/** component to be rendered */
import Header from "../components/dashboardComponents/Header";
import Meeting from "../components/dashboardComponents/Meeting";
import Information from "../components/dashboardComponents/Information";
import Footer from "../components/dashboardComponents/Footer";
import { useNavigate } from "react-router-dom";

function DashboardLayout() {
  /** @enterRoom function to execute after listening to the emitted message from the server when a room is created */
  /** this function takes an argument of roomId and use it to navigate to a room, */
  const navigate = useNavigate();
  const enterRoom = ({ roomId }) => {
    console.log({ roomId });
    navigate(`/roomPage/${roomId}`);
  };

  return (
    <Wrapper>
      {/** top bar */}
      <Header enterRoom={enterRoom} />
      {/** middle content contains meeting and
       * information components
       */}
      <div className='middle'>
        {/** Meeting component displays child components
         * (RecentMeetings and UpcomingMeetings) as outlet
         */}
        <Meeting />
        {/** information component */}
        <Information />
      </div>
      {/** Bottom content contains all the footer*/}
      <Footer />
    </Wrapper>
  );
}
export default DashboardLayout;
