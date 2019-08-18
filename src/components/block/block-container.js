import React from 'react';
import Title from './title'
import copy from './data';
const blockImage =  require('../../assets/images/Numbers.png');

export default function Blocks() {
  return (
    <div>
      <Title />
      <div>
        <img src={blockImage} className='blockImage'  />
        <div className='upsell'>
          {
              copy.map(({ title, body, anchor }) => (
                  <div className="upsell-section-body">
                      <h1 className='upsell-title'>{ title }</h1>
                      <p className='upsell-text'>{ body }</p>
                      <a className='upsell-anchor-text' href="">{ anchor }</a>
                  </div>
              ))
          }
        </div>
      </div>
    </div>
  );
}
