import React from 'react';

function Buttons({ children, className, title }) {
  return (
      <button className={className} title={title}>
          {children}
      </button>
  );
}

export default Buttons;
