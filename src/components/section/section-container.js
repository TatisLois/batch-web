import React from 'react';
import copy from './data'

export default function Section() {
  return (
    <div className='section'>
        {
            copy.map(({title, body, image}) => (
                <div className='section-main'>
                    <div>
                        <h1 className='section-title'>{title}</h1>
                        <p className='section-subtitle'>{body}</p>
                    </div>
                    <img className='section-img' src={image} />
                </div>
            ))
        }
    </div>
  );
}