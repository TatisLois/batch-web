import React from 'react';
import Types from '../components/types'
import Layout from '../components/Layout';
import Footer from '../components/Footer';
import Header from '../components/Header';
import EmailForm from '../components/EmailForm';
import SlideShow from '../components/SlideShow';

var settings = {
  images: [
    { url: require('../assets/images/one.png'), position: 'center' },
  ],
  // Delay.
  delay: 6000,
};

const IndexPage = () => (
  <Layout>
    <Header>
      <Types strings={
        [
          'The Best Way To Order Delivery With Friends',
          'The Best Way To Order Delivery With Family',
          'The Best Way To Order Delivery With Co-workers',
          'The Best Way To Order Delivery'
        ]
      }/>
      <p>A food ordering platform focused on connecting and sharing.</p>
    </Header>
    <EmailForm />
    {/* <Footer /> */}
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;
