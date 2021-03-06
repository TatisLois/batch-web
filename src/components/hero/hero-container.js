import React, { useEffect } from 'react';
import Typed from 'typed.js';
import Form from './form';
const heroURL = require('../../assets/images/hero.png')
const heroSubURL = require('../../assets/images/hero-sub.png')
const topRightCornerURL = require('../../assets/images/top-right.png')
const logoURL = require('../../assets/images/batch.png');


const options = {
  strings: ["friends", "family", "co-workers"],
  typeSpeed: 50,
  backSpeed: 50,
  startDelay: 1000,
  showCursor: false
}


export default function Hero() {

  useEffect(() => {
    new Typed(".typed", options);
  }, [])

  return (
    <div className='hero-blob'
      style={{
          backgroundImage: `url(${topRightCornerURL})`,
        }}>
      <div className='hero-logo'>
        <img className='header-logo' src={logoURL} alt="batch logo" />
      </div>
      <div className='hero'>
        <div className='hero-left'>
          <h1 className='hero-title'>The best way to order delivery with <span className='typed'></span> </h1>
          <p className='hero-subtitle'>Batch is a food delivery app focused on what really matters. People. Whether you are in charge of getting everyones' order at work or having a get together with friends and family, we're here to make ordering easier and more fun! </p>
          <Form />
          <img className='hero-bottom-img' src={heroSubURL} />
        </div>
        <div className='hero-right'>
          <img className='hero-top-img' src={heroURL} />
        </div>
      </div>
    </div>
  );
}
