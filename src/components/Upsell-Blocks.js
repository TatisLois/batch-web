import React from 'react';

export default function UpsellBlock() {
  return (
    <div>
      <h1 className='upsell-main-title'>What You Can Do With Batch</h1>
      <div className='upsell'>
        <div className="upsell-section-body"
        >
          <h1 className='upsell-title'>Easy group ordering</h1>
          <p className='upsell-text'>Create or get invited to a group list or use a group you had eaten with before.</p>
          <a className='upsell-anchor-text' href="">See how Groups work</a>
        </div>
        <div className="upsell-section-body"
        >
          <h1 className='upsell-title'>Discover new places</h1>
          <p className='upsell-text'>Chat with your group while picking a resturant and ordering</p>
          <a className='upsell-anchor-text' href="">See how chat works</a>
        </div>
        <div className="upsell-section-body"
        >
          <h1 className='upsell-title'>Pay Separately</h1>
          <p className='upsell-text'>Everyone in the group can view the ordering process in real-time.  </p>
          <a className='upsell-anchor-text' href="">See how ordering works</a>
        </div>
        <div className="upsell-section-body"
        >
          <h1 className='upsell-title'>Enjoy!</h1>
          <p className='upsell-text'>All meals will come delivered individually packaged and labeled</p>
          <a className='upsell-anchor-text' href="">See how delivery works</a>
        </div>
      </div>
    </div>
  );
}
