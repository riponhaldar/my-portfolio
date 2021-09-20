import React from 'react';
import './scrolltext.scss';
import { useEffect } from 'react';
import { TimelineLite, Power3, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Scrolltext() {
  gsap.to('.scroll_text__next', {
    x: -1300,
    backgroundPosition: '1300px 0',
    scrollTrigger: {
      trigger: 'body',
      start: 'top top',
      scrub: true,
    },
  });

  return (
    <>
      <div className='scroll_text'>
        <div className='scroll_text__next'>
          <span>- Frontend </span> Developer <span>,Portfolio</span> - Frontend
          a<span>- Frontend </span> Developer <span>,Portfolio</span> - Frontend
          b<span>- Frontend </span> Developer <span>,Portfolio</span> - Frontend
          c<span>- Frontend </span> Developer <span>,Portfolio</span> - Frontend
          f<span>- Frontend </span> Developer <span>,Portfolio</span> - Frontend
        </div>
      </div>
    </>
  );
}

export default Scrolltext;
