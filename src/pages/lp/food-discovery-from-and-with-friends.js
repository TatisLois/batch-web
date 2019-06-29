import React from 'react';
import Types from '../../components/types'
import Layout from '../../components/Layout';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import EmailForm from '../../components/EmailForm';
import SlideShow from '../../components/SlideShow';

var settings = {
  images: [
    { url: require('../../assets/images/korean.png'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header>
      <h1> Spotify playlist but for food  </h1>
      <p>Discover curated must eats from foodies, then share it with friends</p>
    </Header>
    <EmailForm />
    {/* <Footer /> */}
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;