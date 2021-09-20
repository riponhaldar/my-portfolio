import React, { useRef, useEffect } from 'react';
import { TimelineLite, Power4, gsap } from 'gsap';
import './miniabout.scss';

function Miniabout() {
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
    <>
      <div className='about__me'>
        <div className='container'>
          <div className='section__name'>
            <p ref={(el) => (dargs = el)}>ABout</p>
          </div>
          <div className='mini__text'>
            <div className='hey__text  hey__text__fast'>
              <div>
                <p>Hi, my name is ripon.</p>
                <p>Deleniti odio facere fugiat. </p>
                <p>quia vel saepe Vitae blanditiis ab</p>
                quia vel saepe quos enim <span> Next Js</span>
              </div>
            </div>
            <div className='hey__text hey__text2'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti odio facere fugiat.
                <span>Next Js</span>
              </p>
            </div>
            s
          </div>
        </div>
      </div>
    </>
  );
}

export default Miniabout;
