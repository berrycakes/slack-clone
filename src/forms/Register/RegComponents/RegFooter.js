import React from 'react';
import { FiGlobe, FiChevronDown } from "react-icons/fi";

function RegFooter() {
  return (
      <footer className='auth-footer'>
          <div>
              <a href="https://slack.com/legal">Privacy & Terms</a>
          </div>
          <div>
              <a href="https://slack.com/help/contact">Contact Us</a>
          </div>
          <div className='change-region'>
              <span><FiGlobe/></span>
              <span>Change region</span>
              <span><FiChevronDown/></span>
          </div>
      </footer>
  );
}

export default RegFooter;
