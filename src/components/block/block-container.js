import React from 'react';
import Title from './title'
import copy from './data';

export default function UpsellBlock() {
  return (
    <div>
      <Title />
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
  );
}
