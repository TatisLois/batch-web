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
      style={{
        background: 'linear-gradient(0deg, rgba(255,255,255,1) 10%, rgba(228,244,241,1) 90%)',
        marginTop: '-10px'
      }}>
      <Blocks/>
      <Section />
    </div>
  </Layout>
);

export default IndexPage;
