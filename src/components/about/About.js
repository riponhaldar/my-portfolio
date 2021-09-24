import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.scss';
function Abour() {
  useEffect(() => {
    // aos Animation
    AOS.init({ duration: 2000 });
  });

  return (
    <div>
      <div className='about'>
        <div className='container'>
          <div className='sec__name'>
            <p>About</p>
          </div>
          <div data-aos='fade-up' className='about__text-container'>
            <div className='about__text'>
              <p>
                Well hello,👋there my name is Ripon Haldar🧔. i'm 22 years old.
                i'm from
                <span> Kolkata, India.</span>
              </p>
              <p>
                I have 1️⃣ year of experience, creating web/design & responsive
                websites.
              </p>
              <p>
                I also like to work in a team 👨‍💻, try to use all tools in my
                work to achieve good results. Now I'm working on MongoDB.
              </p>
              <p>
                <br />
                When I'm not Coding, I watch Netflix 🥤 or youtube 🍿.
              </p>
            </div>
            <div className='about__img'>
              <img src='/mack.jpg' alt='' data-hover=' ' />
            </div>
          </div>
          <div data-aos='fade-in' className='about__keys'>
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
