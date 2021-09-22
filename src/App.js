import { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import './App.scss';
// import all components
import Scrolltext from './components/scrollstext/Scrolltext';
import Navbar from './components/navbar/Navbar';
// import Scroll from './components/Courandscmooth/SmoothScroll';
import Fontpage from './components/fontpage/Fontpage';
import Miniabout from './components/miniabout/Miniabout';
import Work from './components/work/Work';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import { TweenMax, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Cursor from './components/cursor/Index';
gsap.registerPlugin(ScrollTrigger);
function App() {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
    // scroll_text__next

    // end try
  });
  return (
    <div className='App' ref={(el) => (app = el)}>
      <Cursor />
      <Navbar />
      <div className='smoothscroll'>
        <Fontpage />
        <Scrolltext />
        <Miniabout />
        <Work />
        <About />
        <Footer />
        {/* 
        <Scroll />
        */}
      </div>
    </div>
  );
}

export default App;
