import { useEffect, useRef } from 'react';
import { TweenMax, TweenLite, gsap } from 'gsap';
import { ScrollTrigger, ScrollToPlugin } from 'gsap/ScrollTrigger';
import './App.scss';

// import all components
import Scrolltext from './components/scrollstext/Scrolltext';
import Navbar from './components/navbar/Navbar';
// import Scroll from './components/Courandscmooth/SmoothScroll';
import Fontpage from './components/fontpage/Fontpage';
import Miniabout from './components/miniabout/Miniabout';
import Scroll from './components/Courandscmooth/SmoothScroll';
// import Work from './components/work/Work';
// import About from './components/about/About';
// import Footer from './components/footer/Footer';
function App() {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    // jsut try

    let container = document.querySelector('#scroll-container');

    let height;
    function setHeight() {
      height = container.clientHeight;
      document.body.style.height = height + 'px';
    }
    ScrollTrigger.addEventListener('refreshInit', setHeight);

    // smooth scrolling container
    gsap.to(container, {
      y: () => -(height - document.documentElement.clientHeight),
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    // scroll_text__next
    gsap.to('.scroll_text__next', {
      x: -1300,
      backgroundPosition: '1300px 0',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        scrub: true,
      },
    });
    gsap.to('.scroll_text__P', {
      x: 1300,
      backgroundPosition: '1300px 0',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        scrub: true,
      },
    });

    function setupLinks(scroller) {
      let linkElements = gsap.utils.toArray('.nav a'),
        linkTargets = linkElements.map((e) =>
          document.querySelector(e.getAttribute('href'))
        ),
        linkPositions = [],
        calculatePositions = () => {
          let offset = gsap.getProperty(scroller, 'y');
          linkTargets.forEach(
            (e, i) =>
              (linkPositions[i] = e.getBoundingClientRect().top - offset)
          );
        };

      linkElements.forEach((element, i) => {
        element.addEventListener('click', (e) => {
          e.preventDefault();
          gsap.to(window, {
            scrollTo: linkPositions[i],
            ease: 'power4',
            overwrite: true,
          });
        });
      });

      ScrollTrigger.addEventListener('refresh', calculatePositions);
    }

    setupLinks(container);
    // end try
  });
  return (
    <div className='App' ref={(el) => (app = el)}>
      <Navbar />
      <div className='smoothscroll'>
        <div id='scroll-container'>
          <div className='drow'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <Fontpage />
          <Scrolltext />
          <Miniabout />
          {/* 
          <Scroll />  
        <Work />
        <About />
        <Footer />
        */}
        </div>
      </div>
    </div>
  );
}

export default App;
