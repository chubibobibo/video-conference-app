import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
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
    </>
  );
}
export default Footer;
