import React from 'react';
import EmailForm from './Email-Form';
const heroURL = require('../assets/images/hero.png')
const heroSubURL = require('../assets/images/hero-sub.png')

export default function Hero() {
  return (
    <div className='hero'>
      <div className='hero-left'>
        <h1 className='hero-title'>The Best Way to Order Delivery with Friends </h1>
        <p className='hero-subtitle'>Batch is a food delivery app focused on what really matters. People. Whether you are in charge of getting everyones' order at work or having a get together with friends and family, we're here to make ordering easier and more fun! </p>
        <EmailForm />
        <img className='hero-bottom-img' src={heroSubURL} />
      </div>
      <div className='hero-right'>
        <img className='hero-top-img' src={heroURL} />
      </div>
    </div>
  );
}
