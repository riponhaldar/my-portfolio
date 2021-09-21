import React from 'react';
import React, { useRef, useEffect } from 'react';
function Abour() {
  let dargs = useRef();
  useEffect(() => {
    dargs.addEventListener('mouseleave', () => {
      dargs.classList.add('animate-out');
      setTimeout(() => {
        dargs.classList.remove('animate-out');
      }, 300);
    });
  });

  return (
    <div>
      <div className='section__name'>
        <p ref={(el) => (dargs = el)}>ABout</p>
      </div>
    </div>
  );
}

export default Abour;
