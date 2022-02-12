import React from 'react';

function Errors({children, title}) {
  return (
    //   Add conditional className for showing/hiding errors later
      <div className={`error ${title}`}>
          <p>{children}</p>
      </div>
  )
}

export default Errors;
