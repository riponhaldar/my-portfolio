import React from 'react';
import './footer.scss';
function Footer() {
  return (
    <>
      <div className='footer' id='contact'>
        <div className='container'>
          <div className='social__contact'>
            <ul>
              <li>
                <a
                  href='https://www.linkedin.com/in/riponhaldar'
                  target='_blank'
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a href='https://github.com/riponhaldar' target='_blank'>
                  Github
                </a>
              </li>
              <li>
                <a href='https://twitter.com/riphaldar' target='_blank'>
                  Twitter
                </a>
              </li>
            </ul>
            <div className='contact'>
              <p className='mail'>
                <a href='mailto:riponhaldar006@gmail.com' data-hover='📧'>
                  riponhaladr006@gmail.com
                </a>
              </p>
              <em>
                91+
                <a href='tel:7001186009'> 7001186009</a>
              </em>
            </div>
          </div>
          <p>© rionhaldar 2021</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
