import React, { useRef, useEffect } from 'react';
import './work.scss';
function Work() {
  // let dargs = useRef();
  // useEffect(() => {
  //   dargs.addEventListener('mouseleave', () => {
  //     dargs.classList.add('animate-out');
  //     setTimeout(() => {
  //       dargs.classList.remove('animate-out');
  //     }, 600);
  //   });
  // });
  return (
    <>
      <div className='work__section' id='work'>
        <div className='container'>
          <div className='section__name'>
            <p>Work</p>
          </div>
          <div className='work'>
            <div className='work__fast '>
              <img src='/demo1.png' alt='' />
              <div className='work__fasr__text'>
                <h4>Blog webiste</h4>
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Dolores, excepturi! Lorem ipsum
                  dolor sit amet Lorem ipsum, dolor sit amet
                </p>
                <p>
                  <span>NEXT js</span>
                  <span>NEXT js</span>
                  <span>NEXT js</span>
                </p>
              </div>
            </div>
            <div className='work__second'>
              <img src='/demo2.png' alt='' />
              <div className='work__fasr__second'>
                <h4>Blog webiste</h4>
                <p>
                  Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Dolores, excepturi! Lorem ipsum
                  dolor sit amet Lorem ipsum, dolor sit amet
                </p>
                <p>
                  <span>NEXT js</span>
                  <span>NEXT js</span>
                  <span>NEXT js</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
