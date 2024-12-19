/** Importing styled components */
import Wrapper from "../assets/wrappers/IndexWrapper.js";
import TextInput from "../components/inputFields/TextInput.jsx";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
function Index() {
  return (
    <Wrapper>
      {/** top bar */}
      <div className='top-bar'>
        <h2>Jitsi Meet</h2>
        <p> High quality secured video conference</p>
        {/** container for input text and button to start conference */}
        <div className='start-conf-container'>
          <TextInput />
          <Button color='blue' className='w-[50%]'>
            Start the conference
          </Button>
        </div>
      </div>
      {/** middle content */}
      <div className='middle'>
        <div className='meeting'></div>
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
      </div>
      {/** Bottom content */}
      <div className='bottom-bar'>
        <div className='bottom-first'>
          Jitsi on mobile-download our apps and start a meeting from anywhere
          <button className='bottom-appstore'>
            <Link>
              <img
                src='../src/assets/appstore3.png'
                className='button-appstore'
                alt=''
              />
            </Link>
          </button>
          <button className='bottom-googleplay'>
            <Link>
              <img
                src='../src/assets/googleplay.png'
                className='button-googleplay'
                alt=''
              />
            </Link>
          </button>
          <button className='bottom-fdroid'>
            <Link>
              <img
                src='../src/assets/fdroid.png'
                className='button-fdroid'
                alt=''
              />
            </Link>
          </button>
        </div>
        <hr />
        <div className='bottom-second'>
          Hello, Slack fans! Very pleased to meet you! Just add our extension
          and off you go!
          <button className='bottom-second-slack'>
            <Link>
              <img src='../src/assets/slack.png' alt='' />
            </Link>
          </button>
        </div>
        <hr />
        <div className='bottom-third'>
          <div>Privacy Policy</div>
          <div>Terms & Conditions</div>

          <button className='button-facebook'>
            <Link>
              <img
                src='../src/assets/facebook1.png'
                className='img-facebook'
                alt=''
              />
            </Link>
          </button>
          <button className='button-twitter'>
            <Link>
              <img
                src='../src/assets/twitter1.png'
                className='img-twitter'
                alt=''
              />
            </Link>
          </button>
          <button className='button-instagram'>
            <Link>
              <img
                src='../src/assets/instagram1.png'
                className='img-instagram'
                alt=''
              />
            </Link>
          </button>
          <button className='button-github'>
            <Link>
              <img src='../src/assets/' alt='' />
            </Link>
          </button>
        </div>
        <hr />
        <div className='bottom-fourth'>
          <div className='info-box-icon'>8x8</div>
          <span>8x8 is a proud supporter of the Jitsi community.</span>
          <span>© 8x8, Inc. All Rights Reserved</span>
        </div>
      </div>
    </Wrapper>
  );
}
export default Index;
