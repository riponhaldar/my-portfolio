import React, { useRef, useEffect } from 'react';
import './about.scss';
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
      <div className='about'>
        <div className='container'>
          <div className='section__name'>
            <p ref={(el) => (dargs = el)}>ABout</p>
          </div>
          <div className='about__text-container'>
            <div className='about__text'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
              </p>
              <p>
                quis soluta asperiores harum alias facilis labore, cum ad,
                fugiat assumenda quidem delectus possimus aliquid quasi esse?
                Minima quaerat soluta eius?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
                quis soluta asperiores harum alias facilis labore, cum ad,
                fugiat assumenda quidem delectus possimus aliquid quasi esse?
                Minima quaerat soluta eius?
              </p>
            </div>
            <div className='about__img'>
              <img src='/mack.jpg' alt='' />
            </div>
          </div>
          <div className='about__keys'>
            <div className='skils'>
              <div className='skils__name'>
                PROGRAMMING LANGUAGES & OTHERS :
              </div>
              <div>
                <ul>
                  <li>
                    <span>HTML/Css</span>
                  </li>
                  <li>
                    <span>Sass</span>
                  </li>
                  <li>
                    <span>Tailwindcss</span>
                  </li>
                  <li>
                    <span>sBootstrap</span>
                  </li>
                </ul>
                <ul>
                  <li>
                    <span> Gsap</span>
                  </li>
                  <li>
                    <span>React Js</span>
                  </li>
                  <li>
                    <span>Next Js</span>
                  </li>
                  <li>
                    <span>Node Js</span>
                  </li>
                </ul>
                <ul></ul>
              </div>
            </div>
            <div className='tools'>
              <div className='tools__name'>Lorem ipsum dolor sit.</div>
              <div>
                <ul>
                  <li>
                    <span>Vs Code</span>
                  </li>
                  <li>
                    <span>Photoshop</span>
                  </li>
                  <li>
                    <span>Figma</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className='icons'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Abour;
