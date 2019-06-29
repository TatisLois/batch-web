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
      <Types strings={
        [
          'Stop paying for that... friend',
          'Stop paying for that... co-workers',
          'Stop paying for your date',
          'Stop paying for your date... <br/> wait maybe still treat them &#128521;',
        ]
      }/>
      <p> Ordering that makes sense </p>
    </Header>
    <EmailForm />
    {/* <Footer /> */}
    <SlideShow settings={settings} />
  </Layout>
);

export default IndexPage;