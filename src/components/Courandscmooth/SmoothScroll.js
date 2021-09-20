import Scrollbar from 'smooth-scrollbar';
import { useEffect } from 'react';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';

const overscrollOptions = {
  enable: false,
  effect: 'bounce',
  damping: 0.1,
  renderByPixels: true,
  maxOverscroll: 150,
  continuousScrolling: true,
  glowColor: '#2204ff',
  alwaysShowTracks: false,
};

const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};

const Scroll = () => {
  useEffect(() => {
    Scrollbar.use(OverscrollPlugin);

    Scrollbar.init(document.querySelector('.smoothscroll'), options);

    return () => {
      if (Scrollbar) Scrollbar.destroy(document.querySelector('.smoothscroll'));
    };
  }, []);

  return null;
};

export default Scroll;
