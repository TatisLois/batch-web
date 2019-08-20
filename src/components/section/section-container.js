import React from 'react';
import Form from '../hero/form'
import copy from './data'

function isEven(value) {
	if (value%2 == 0)
		return true;
	else
		return false;
}

export default function Section() {
  return (
    <div className='section'>
        {
            copy.map(({ id, title, body, image}, index) => (
                <div
                  key={`${title}-${index}`}
                  data-section-id={id}
                  className={['section-main', isEven(index) ? 'section-reverse' : ''].join(' ')} >
                    <div className='section-copy'>
                        <h1 className='section-title'>{title}</h1>
                        <p className='section-subtitle'>{body}</p>
                    </div>
                    <img className='section-img' src={image} />
                </div>
            ))
        }
        <Form style={{justifyContent: 'center', 'marginBottom': '6rem'}} />
    </div>
  );
}