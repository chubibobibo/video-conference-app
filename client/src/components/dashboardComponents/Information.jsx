/** Importing styled components */

import { Button } from "@material-tailwind/react";

function Information() {
  return (
    <>
      <div className='info'>
        <div className='info-top'>
          <div className='info-box-icon'>8x8</div>
          <span>Jitsi as a Service</span>
        </div>
        <div className='info-middle'>
          <h3>Want meetings in your app? Check out Jitsi as a Service</h3>
          <span>
            Connect the users of your website or app. Get branding & tight
            access controls. Have notifications, transcriptions & recordings
            delivered straight to your backend
          </span>
        </div>
        <div className='info-bottom'>
          <Button color='white' className='w-[10%], h-[100%]'>
            Learn more
          </Button>
        </div>
      </div>
    </>
  );
}
export default Information;
