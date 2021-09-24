import './miniabout.scss';
import { gsap, TimelineLite } from 'gsap';
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
                <p>Hi, I'm Ripon.</p>
                <p>I'm a frontend developer,, I complete my bachelor degree.</p>
              </div>
            </div>
            <div className='hey__text hey__text2'>
              <p>Build some responsive website, some clone. now I'm working </p>
              <span>MongoDB</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Miniabout;
