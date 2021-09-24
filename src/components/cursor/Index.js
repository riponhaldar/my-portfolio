import React from 'react';
import { useEffect } from 'react';

import './cursor.scss';

function Index() {
  useEffect(() => {
    let cursor = document.querySelector('.cursor');
    let cursor2 = document.querySelector('.cursor2');
    let messages = document.querySelector('.cursor2 span');
    let views = document.querySelectorAll('img');
    let contact = document.querySelector('.mail a');
    // document.addEventListener('mousemove', function (e) {
    //   cursor.style.cssText = cursor2.style.cssText =
    //     'left: ' + e.clientX + 'px; top: ' + e.clientY + 'px;';
    // });
    window.addEventListener('mousemove', cursors);
    function cursors(e) {
      cursor.style.top = e.clientY + 'px';
      cursor.style.left = e.clientX + 'px';
      cursor2.style.top = e.clientY + 'px';
      cursor2.style.left = e.clientX + 'px';
    }

    contact.addEventListener('mousemove', (e) => {
      cursor2.classList.add('link-grow');
      messages.innerHTML = contact.getAttribute('data-hover');
    });
    contact.addEventListener('mouseleave', (e) => {
      cursor2.classList.remove('link-grow');
      messages.innerHTML = '';
    });

    views.forEach((viewPro) => {
      viewPro.addEventListener('mousemove', (e) => {
        cursor2.classList.add('link-grow');
        messages.innerHTML = viewPro.getAttribute('data-hover');
      });
      viewPro.addEventListener('mouseout', (e) => {
        cursor2.classList.remove('link-grow');
        messages.innerHTML = '';
      });
    });
  });
  return (
    <>
      <div className='cursor'></div>
      <div className='cursor2'>
        <span></span>
      </div>
    </>
  );
}

export default Index;
