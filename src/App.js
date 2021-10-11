import { useEffect, useState, useRef } from 'react';
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
import { TweenMax, gsap, Power2, Expo } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Cursor from './components/cursor/Index';
import Loading from './components/Loading.js';
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loading, setLoading] = useState();
  function ShowLoading() {
    setLoading(true);
  }
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
  });
  return (
    <div className='App' ref={(el) => (app = el)}>
      <Loading ShowLoading={() => ShowLoading()} />
      {loading ? (
        <div className='content'>
          <Cursor />
          <Navbar />
          <div className='cotent__body'>
            <Fontpage />
            <Scrolltext />
            <Miniabout />
            <Work />
            <About />
            <Footer />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
