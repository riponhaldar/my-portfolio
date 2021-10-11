import React, { useEffect, useState } from 'react';
import { TimelineLite, gsap } from 'gsap';
function Loading({ ShowLoading }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const count = setInterval(() => {
      setCounter((counter) => {
        // counter < 100 ? setCounter(counter + 1) : setCounter(100);
        if (counter < 100) {
          setCounter(counter + 1);
        } else {
          setCounter(100);
          clearInterval(count);
          reveal();
        }
      });
    }, 30);
  }, []);

  const reveal = () => {
    const tl = new TimelineLite({
      onComplete: () => {
        ShowLoading();
      },
    });
    tl.to('.hide', 0.8, { opacity: 0 }, '+=0.4');
    tl.to('.loading', 0.3, { transform: ' translateY(-100%)' }, '+=0.2');
    tl.to('main', 0.4, { transform: ' translateY(-100%)' });
    tl.to('main', 0, { display: 'none' });
  };
  return (
    <main>
      <div className='loading'>
        <div className='hide' id='bar' style={{ width: counter + '%' }}></div>
        <p id='count' className='hide'>
          $ {counter}
        </p>
      </div>
    </main>
  );
}

export default Loading;
