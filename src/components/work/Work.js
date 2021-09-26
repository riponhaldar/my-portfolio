import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './work.scss';
function Work() {
  // let dargs = useRef();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  });
  return (
    <>
      <div className='work__section' id='work'>
        <div className='container'>
          <div className='sec__name__work'>
            <p>Work</p>
          </div>
          <div className='work '>
            <div className='work__fast'>
              <div>
                <a href='https://hoichoi-just-try.netlify.app/' target='_blank'>
                  <img
                    data-aos='fade-left'
                    className='view_project'
                    src='/hoichoi.png'
                    alt=''
                    data-hover='{view}'
                  />
                </a>
              </div>
              <div data-aos='fade-right' className='work__fasr__text'>
                <h4>Hoichoi Clone</h4>
                <p>
                  <a href='https://hoichoi-just-try.netlify.app/'>
                    hoichoi clone 👁
                  </a>{' '}
                  using slick for image slide,resposive. 👉
                  <a href='https://github.com/riponhaldar/Hoichoi_mini'>
                    {' '}
                    Source Code 👨‍💻
                  </a>{' '}
                  <br />
                  <a href='https://www.hoichoi.tv'>
                    hoichoi is a Bengali OTT platform.
                  </a>
                </p>
                <p>
                  <span>HTML</span>
                  <span>SASS</span>
                  <span>SLICK</span>
                </p>
              </div>
            </div>
            <h1>projects coming soon ... </h1>
            {/*
            <div data-aos='fade-up' className='work__second'>
              <img
                data-aos='fade-right'
                className=' view_project'
                src='/hoichoi.png'
                alt=''
                data-hover='{view}'
              />
              <div data-aos='fade-left' className='work__fasr__second'>
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
         */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
