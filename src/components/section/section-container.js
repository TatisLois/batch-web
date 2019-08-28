import React from 'react';
import copy from './data'

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

function scrollToCTA () {
  document.querySelector('.header-logo').scrollIntoView({
    behavior: 'smooth'
  });
}

export default function Section() {
  return (
    <div className='section'>
        {
            copy.map(({ id, title, body, image, button}, index) => (
                <div
                  key={`${title}-${index}`}
                  data-section-id={id}
                  className={['section-main', isEven(index) ? 'section-reverse' : ''].join(' ')} >
                    <div className='section-copy'>
                        <h1 className='section-title'>{title}</h1>
                        <p className='section-subtitle'>{body}</p>
                        <button className='section-arrow'
                          onClick={scrollToCTA}
                        >
                          {button}
                          &#8594;
                        </button>
                    </div>
                    <img className='section-img section-desktop'
                    src={image.desktop.img}
                    />
                    <img className='section-img section-mobile'
                    src={image.mobile.img}
                    />
                </div>
            ))
        }
    </div>
  );
}