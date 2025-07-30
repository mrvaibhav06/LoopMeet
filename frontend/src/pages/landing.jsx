import React from 'react';

import { Link } from 'react-router-dom';
import MyNavbar from '../navbar/MyNavbar';

export default function LandingPage() {
  return (
    <div className='landingPageContainer'>
      <MyNavbar /> {/* Navbar yahan import ho gaya */}

      <div className="landingMainContainer">
        <div>
          <h1>
            <span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones
          </h1>
          <p>Cover a distance by LoopMeet video call </p>
          <div role='button'>
            <Link to="/auth">Get Started</Link>
          </div>
        </div>
        <div>
          <img src="/mobile.png" alt="" />
        </div>
      </div>
    </div>
  );
}
