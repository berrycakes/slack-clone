import React from 'react';
import { TiWarningOutline } from "react-icons/ti";
import Buttons from './../Buttons'

function DefaultErrorPage() {
  return (
      <div className='Error-page-container'>
          <header className='error-page-header-container'>
            <div className='errorpage-header-logo'>
              <img src='https://tinyurl.com/47amd6zw' width='106px' height='auto'/>
            </div>
            <div className='error-page-header-links'>
              <ul>
                <li>Product</li>
                <li>Pricing</li>
                <li>Support</li>
                <li>Create a new workspace</li>
                <li>Find your workspace</li>
              </ul>
            </div>
            <div className='error-page-header-login'>
              <Buttons>Sign In</Buttons>
            </div>
          </header>
          <main className='error-page-main-container'>
              <div className='error-container'>
                  <div className='error-title'>
                    <span className='warning-red'><TiWarningOutline/></span>
                    <span>There's been a glitch...</span>
                  </div>
                  <br/>
                  <div className='error-message'>
                    <p>We're not quite sure what went wrong. You can go back, or try looking on our <a href='http://get.slack.help/hc/en-us'>Help Center</a> if you need a hand.</p>
                  </div>
              </div>
          </main>
          <footer className='error-page-footer-container'>
            <div className='error-footer-links'>
              <div className='colfooter c1'>
                <span className='error-footer-links-title'>Using Slack</span>
                <div className='item-footer-link'>Product</div>
                <div className='item-footer-link'>Enterprise</div>
                <div className='item-footer-link'>Pricing</div>
              </div>
              <div className='colfooter c2'>
                <span className='error-footer-links-title'>Slack &#9825;</span>
                <div className='item-footer-link'>Jobs</div>
                <div className='item-footer-link'>Customers</div>
                <div className='item-footer-link'>Developers</div>
              </div>
              <div className='colfooter c3'>
                <span className='error-footer-links-title'>Legal</span>
                <div className='item-footer-link'>Privacy</div>
                <div className='item-footer-link'>Security</div>
                <div className='item-footer-link'>Terms of Service</div>
              </div>
              <div className='colfooter c4'>
                <span className='error-footer-links-title'>Handy Links</span>
                <div className='item-footer-link'>Download desktop app</div>
                <div className='item-footer-link'>Download mobile app</div>
                <div className='item-footer-link'>Brand Guidelines</div>
              </div>
            </div>
          </footer>
      </div>
  );
}

export default DefaultErrorPage;