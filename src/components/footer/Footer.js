import React from 'react';
import './footer.scss';
function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='container'>
          <div className='social__contact'>
            <ul>
              <li>
                <a href='/'>LinkedIN</a>
              </li>
              <li>
                <a href='/'>github</a>
              </li>
              <li>
                <a href='/'>Twitter</a>
              </li>
            </ul>
            <div className='contact'>
              <p>
                <a href='mailto:riponhaldar006@gmail.com'>
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
