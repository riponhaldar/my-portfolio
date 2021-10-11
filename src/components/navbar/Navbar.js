import React, { useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
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
              <Link spy={true} smooth={true} duration={1000} to='home'>
                <div className='logo' ref={(el) => (logo = el)}>
                  RIpon<span>:)</span>
                </div>
              </Link>
              <ul className='nav__items nav' ref={(el) => (navLi = el)}>
                <li className='nav__links'>
                  <Link spy={true} smooth={true} duration={1000} to='work'>
                    work👨‍💻
                  </Link>
                </li>
                <li className='nav__links'>
                  <Link spy={true} smooth={true} duration={1000} to='about'>
                    about🧔
                  </Link>
                </li>
                <li className='nav__links'>
                  <Link spy={true} smooth={true} duration={1000} to='contact'>
                    contact📧
                  </Link>
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
