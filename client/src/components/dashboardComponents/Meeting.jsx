/** Importing styled components */
import { Button } from "@material-tailwind/react";
import { Link, Outlet } from "react-router-dom";
// import { IoCalendarOutline } from "react-icons/io5";

function Meeting() {
  return (
    <>
      <div className='meeting'>
        {/** renders the meeting pages in this div */}
        <div className='link-upcoming'>
          <Link to={"/dashboard/upcomingMeetings"}>
            <Button className='button-upcoming'>Upcoming Meetings</Button>
          </Link>
        </div>
        <div className='link-recent'>
          <Link to={"/dashboard/recentMeetings"}>
            <Button className='button-recent'>Recent Meetings</Button>
          </Link>
        </div>
        <div className='meeting-content'>
          {/** renders the child components
           * of DashboardLayout (RecentMeetings, UpcomingMeetings)
           */}
          <Outlet />
        </div>
      </div>
    </>
  );
}
export default Meeting;
