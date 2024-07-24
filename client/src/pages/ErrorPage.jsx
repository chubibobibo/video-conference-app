import { useRouteError } from "react-router-dom";
import Wrapper from "../assets/wrappers/ErrorPageWrapper";
import { Link } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  console.log(error);
  return (
    <Wrapper>
      <div className='error-container'>
        {error.status === 404 ? (
          <>
            <img src='/src/assets/404error.jpg' alt='' />
          </>
        ) : (
          <>
            <h1 className='error2-header'>Oooops...something went wrong</h1>
            <img src='/src/assets/errorpng.png' alt='' className='error2' />
            {error.stack}
          </>
        )}
        <div className='link-container'>
          <Link to='/dashboard/upcomingMeetings'>
            <h1>Back to the dashboard</h1>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
export default ErrorPage;
