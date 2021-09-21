import './miniabout.scss';
import { gsap, TimelineLite, Power3 } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
function Miniabout() {
  let abouttext = useRef(null);
  let tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    tl.from(abouttext, {
      duration: 15,
      opacity: 0,
      y: -110,
      scrollTrigger: {
        scrub: true,
        trigger: abouttext,
        start: 'top bottom-=100',
        end: 'bottom bottom-=200',
        // markers: true,
      },
    });
  });

  return (
    <>
      <div className='about__me' id='about'>
        <div className='container'>
          <div className='mini__text' ref={(el) => (abouttext = el)}>
            <div className='hey__text  hey__text__fast'>
              <div>
                <p>hi, i'm ripon.</p>
                <p>i'm a frontend developer learning now </p>
                <span> Next Js</span>
              </div>
            </div>
            <div className='hey__text hey__text2'>
              <p>build project resonponsive website, fun</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Miniabout;
