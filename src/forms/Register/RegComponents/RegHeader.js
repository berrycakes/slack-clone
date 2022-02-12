import React from 'react';

function RegHeader() {
  return (
      <header className='auth-header'>
          <div>
              <img className='slack-logo-auth' src='https://a.slack-edge.com/bv1-9/slack_logo-ebd02d1.svg' alt='Slack-logo' height='24px'/>
          </div>
          <div>
              <h1>Set up your email and passwords.</h1>
              <p>We suggest using the <strong>email address you use at work.</strong></p>
          </div>
      </header>
  );
}

export default RegHeader;
