import React from 'react';
import Title from './title'
import copy from './data';

export default function Blocks() {
  return (
    <div>
      <Title />
        <div className='upsell'>
          {
              copy.map(({ id, title, body, anchor, stepImage }) => (
                  <div className="upsell-section-body">
                    <img src={stepImage} />
                    <h1 className='upsell-title'>{ title }</h1>
                    <p className='upsell-text'>{ body }</p>
                      <button className='upsell-anchor-text'
                        onClick={() => { document.querySelector(`[data-section-id=${id}]`).scrollIntoView(
                          {
                            behavior: 'smooth'
                          });}}>
                          { anchor }
                      </button>
                  </div>
              ))
          }
      </div>
    </div>
  );
}
