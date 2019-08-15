import React from 'react';
import Layout from '../components/Layout';
import UpsellBlocks from "../components/Upsell-Blocks";
import Hero from '../components/Hero';
import Section from "../components/Section";
const curveLine = require('../assets/images/curve-line.png')

const IndexPage = () => (
  <Layout>
    <Hero />
    <img src={curveLine} height='170' width='100%'/>
    <div
      style={{
        background: 'linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(228,244,241,1) 90%)',
        marginTop: '-10px'
      }}>
      <UpsellBlocks/>
      <Section />
    </div>
  </Layout>
);

export default IndexPage;
