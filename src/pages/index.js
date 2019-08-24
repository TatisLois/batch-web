import React from 'react';
import Layout from '../components/Layout';
import Blocks from "../components/block";
import Hero from '../components/hero';
import Section from "../components/section";
import WaveSVG from '../components/wave';

const IndexPage = () => (
  <Layout>
    <Hero />
    <WaveSVG />
    <div
      className='section-background'>
      <Section />
    </div>
  </Layout>
);

export default IndexPage;
