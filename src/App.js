import { useEffect, useRef } from 'react';
import { TweenMax } from 'gsap';
import './App.scss';

// import all components
import Scrolltext from './components/scrollstext/Scrolltext';
import Navbar from './components/navbar/Navbar';
import Scroll from './components/Courandscmooth/SmoothScroll';
import Fontpage from './components/fontpage/Fontpage';
import Miniabout from './components/miniabout/Miniabout';
// import Work from './components/work/Work';
// import About from './components/about/About';
// import Footer from './components/footer/Footer';
function App() {
  let app = useRef(null);
  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });
  });
  return (
    <div className='App' ref={(el) => (app = el)}>
      <Navbar />

      <div className='smoothscroll'>
        <Scroll />
        <Fontpage />
        <Scrolltext />
        <Miniabout />
        {/*   
        <Work />
        <About />
        <Footer />
        */}
      </div>
    </div>
  );
}

export default App;
