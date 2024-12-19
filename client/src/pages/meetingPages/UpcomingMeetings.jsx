/** Importing styled components */
import Wrapper from "../../assets/wrappers/UpcomingMeetingWrapper.js";
import { Link } from "react-router-dom";

import { BsCalendar3 } from "react-icons/bs";
import { CiCalendar } from "react-icons/ci";

import "add-to-calendar-button";
import { AddToCalendarButton } from "add-to-calendar-button-react";

function UpcomingMeetings() {
  return (
    <Wrapper>
      <div className='calendar-container'>
        <BsCalendar3 size={120} color={"gray"} />
      </div>
      <div>
        <span>
          Connect to your calendar to view all Jitsi meetings. Also add Jitsi
          meetings to your calendar and start them with a single click.{" "}
        </span>
      </div>
      <div className='calendar-link'>
        <CiCalendar size={25} color={"white"} />
        <Link to='https://calendar.google.com/calendar/u/0/r'>
          Connect to your calendar
        </Link>
      </div>
    </Wrapper>
  );
}
export default UpcomingMeetings;
