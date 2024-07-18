/** Importing styled components */
import Wrapper from "../../assets/wrappers/RecentMeetingWrapper.js";
import { Link } from "react-router-dom";

/** importing temporary meeting data */
import { meetingData } from "../../utils/meetingData.js";

function RecentMeetings() {
  return (
    <Wrapper>
      {meetingData.map((newData, idx) => {
        return (
          <div className='meeting-element-container' key={idx}>
            <div className='meeting-date'>{newData.date}</div>
            <div className='meeting-name'>{newData.meetingName}</div>
            <div className='meeting-time'>{newData.time}</div>
            <div className='meeting-finish'>00:00</div>
          </div>
        );
      })}
    </Wrapper>
  );
}
export default RecentMeetings;
