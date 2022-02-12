import React from 'react';

function Logout({handleOpen}) {  
    return (  
    <div className='logout-avatar' onClick={handleOpen}>
        <img src='https://ca.slack-edge.com/T0266FRGM-U011PLSSMA9-g7e8a6705c42-512'
        width='24px'
        height='24px'
        position='absolute'
        right='16px'
        top='8px'></img>
    </div>
  );
}

export default Logout;
