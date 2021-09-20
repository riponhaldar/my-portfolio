import { TimelineLite, Power4 } from 'gsap';
import { useEffect } from 'react';
import './header.scss';
function Fontpage() {
  let tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    tl.from('.line p', 2, {
      y: 150,
      ease: Power4.out,
      delay: 0.8,
      skewY: 4,
      stagger: {
        amount: 0.5,
      },
    });
  });
  return (
    <>
      <div className='header'>
        <div className='container'>
          <div className='header__text'>
            <div className='line'>
              <p> Hi,</p>
              <p> MY NAME IS</p>
              <p> RIPon,</p>
            </div>
            <div className='line'>
              <p> I'm FRONTEND</p>
            </div>
            <div className='line'>
              <p> -DEVELOPER</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Fontpage;
