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
      <h1> Multiple Payments, One Order!</h1>
      <Types strings={
        [
          'An easier way to order with family',
          'An easier way to order with friends',
          'An easier way to order with co-workers',
          'An easier way to order'
        ]
      }/>
    </Header>
    <EmailForm />
    {/* <Footer /> */}
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;