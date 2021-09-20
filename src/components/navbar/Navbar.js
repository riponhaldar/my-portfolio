import React, { useRef, useEffect } from 'react';
import './navbar.scss';
import { TimelineLite, Power4, gsap } from 'gsap';

function Navbar() {
  let navLi = useRef();
  let logo = useRef();
  let tl = new TimelineLite({ delay: 0.4 });
  useEffect(() => {
    tl.from(logo, {
      y: -20,
      opacity: 0,
      ease: Power4.out,
      delay: 0.3,
      duration: 1,
      skewX: 4,
      stagger: {
        amount: 0.8,
      },
    });
    // navlinks
    gsap.from(navLi.children, {
      y: -20,
      opacity: 0,
      ease: Power4.out,
      delay: 0.3,
      duration: 1,
      skewX: 4,
      stagger: {
        amount: 0.8,
      },
    });
    // Animation nav links
    const navLinks = gsap.utils.toArray('ul a');
    navLinks.forEach((link) => {
      link.addEventListener('mouseleave', () => {
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
              <div className='logo' ref={(el) => (logo = el)}>
                RIpon<span>:)</span>
              </div>

              <ul className='nav__items' ref={(el) => (navLi = el)}>
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
