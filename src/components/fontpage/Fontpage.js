import { TimelineLite, Power3, gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import './header.scss';
function Fontpage() {
  let backtext = useRef();
  let headermini = useRef();
  let tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    gsap.from(
      backtext.children,
      1.2,
      {
        y: 200,
        ease: Power3.out,
        delay: 0.3,
        stagger: {
          amount: 0.8,
        },
      },
      '-=1.8'
    );
    tl.from('.line p', 1.2, {
      y: 160,
      ease: Power3.out,
      delay: 0.3,
      opacity: 0,
      skewY: 7,
      stagger: {
        amount: 0.8,
      },
    }).from(
      headermini.children,
      1.8,
      {
        y: 20,
        ease: Power3.out,
        delay: 0.3,
        opacity: 0,
        stagger: {
          amount: 0.8,
        },
      },
      '-=1.2'
    );
  });
  return (
    <>
      <div className='header' id='home'>
        <div className='header_a'>
          <div className='back_text'>
            <div ref={(el) => (backtext = el)}>
              <p>CREATIVE</p>
            </div>
          </div>
          <div className='container'>
            <div className='header__text'>
              <div className='line'>
                <p> Hi,</p>
                <p> MY NAME IS RIPon, </p>
              </div>
              <div className='line'>
                <p> I'm FRONTEND</p>
              </div>
              <div className='line'>
                <p> -DEVELOPER</p>
              </div>
            </div>
            <div className='header_mini' ref={(el) => (headermini = el)}>
              <p>wellcome to my portfolio ,im students, </p>
              <p>builds some project</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fontpage;
