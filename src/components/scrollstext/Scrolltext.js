import React, { useState } from 'react';
import './scrolltext.scss';
import { useEffect } from 'react';
import { TimelineLite, Power3, gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Scrolltext() {
  // useState(() => {
  //   gsap.to('.scroll_text__next', {
  //     x: -1300,
  //     backgroundPosition: '1300px 0',
  //     scrollTrigger: {
  //       trigger: 'body',
  //       start: 'top top',
  //       scrub: true,
  //     },
  //   });
  // });

  return (
    <>
      <div className='scroll_text'>
        <div className='scroll_text__next'>
          <span>- Frontend </span> - Developer
          <span>- Frontend </span> - Developer
          <span>- Frontend </span> - Developer
          <span>- Frontend </span> - Developer
          <span>- Frontend </span> - Developer
        </div>
        <div className='scroll_text__P'>
          <span>- Portfolio </span> Portfolio
          <span>- Portfolio </span> Portfolio
          <span>- Portfolio </span> Portfolio
          <span>- Portfolio </span> Portfolio
          <span>- Portfolio </span> Portfolio
        </div>
      </div>
    </>
  );
}

export default Scrolltext;
