/** Importing styled components */
import Wrapper from "../assets/wrappers/IndexWrapper.js";

/** component to be rendered */
import Header from "../components/dashboardComponents/Header";
import Meeting from "../components/dashboardComponents/Meeting";
import Information from "../components/dashboardComponents/Information";
import Footer from "../components/dashboardComponents/Footer";

function DashboardLayout() {
  return (
    <Wrapper>
      {/** top bar */}
      <Header />
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
