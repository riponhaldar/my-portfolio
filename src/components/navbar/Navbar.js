import React from 'react';
import './navbar.scss';
import { gsap, TimelineLite } from 'gsap';
// import { TextPlugin } from 'gsap/TextPlugin';
import { useEffect } from 'react/cjs/react.development';
// import { Link } from 'react-router-dom';
function Navbar() {
  let tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    tl.from('ul li', 2, {
      y: -10,
      ease: 'power4.out',
      delay: 0.4,
      opacity: 0,
      skewY: -8,
      stagger: {
        amount: 0.5,
      },
    });
  });
  // Animation
  useEffect(() => {
    const navLinks = gsap.utils.toArray('.nav__items a');
    navLinks.forEach((link) => {
      link.addEventListener('mouseleave', (e) => {
        link.classList.add('animate-out');

        setTimeout(() => {
          link.classList.remove('animate-out');
        }, 300);
      });
    });
  });
  return (
    <>
      <div className='navbar'>
        <div className='container'>
          <div className='sadasd'>
            <nav>
              <a href='/'>
                <div className='logo'>
                  RIpon<span>:)</span>
                </div>
              </a>

              <ul className='nav__items'>
                <li className='nav__links'>
                  <a href='/'>work👷‍♂️</a>
                </li>
                <li className='nav__links'>
                  <a href='/'>about👨‍💻</a>
                </li>
                <li className='nav__links'>
                  <a href='/'>contact📧</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
