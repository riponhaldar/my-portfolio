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
import { TweenMax, gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import Cursor from './components/cursor/Index';
import Loader from './components/loder/Loader';
gsap.registerPlugin(ScrollTrigger);
function App() {
  const [loading, setLoading] = useState(false);

  function showContent() {
    setLoading(true);
  }
  // useEffect(() => {
  //   //   setTimeout(() => {
  //   //     setLoading(false);
  //   //   }, 4000);
  // }, []);

  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
  });
  return (
    <div className='App' ref={(el) => (app = el)}>
      {loading ? (
        <Loader showContent={() => showContent()} />
      ) : (
        <div className='app_sec'>
          <Cursor />
          <Navbar />
          <div className='smoothscroll'>
            <Fontpage />
            <Scrolltext />
            <Miniabout />
            <Work />
            <About />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
