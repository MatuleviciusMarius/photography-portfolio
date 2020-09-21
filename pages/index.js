import React from 'react';
import Head from 'next/head';
import BackgroundSlider from 'react-background-slider';

import Navigation from '../components/Navigation/Navigation';

const Index = () => (
  <html>
    <Head>
      <title>Portfolio</title>
    </Head>
    <body>
      <BackgroundSlider images={['/first.jpg', '/second.jpg']} duration={10} transition={2} />
      <Navigation />
    </body>
  </html>
);

export default Index;
