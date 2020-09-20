import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import BackgroundSlider from 'react-background-slider';

const Title = styled.h1`
  font-size: 3rem;
  color: ${(props) => props.theme.primary};
`;

const Index = () => (
  <>
    <Head>
      <title>Hello World</title>
    </Head>
    <body>
      <BackgroundSlider images={['/first.jpg', 'second.jpg']} duration={10} transition={2} />

      <h1>Hello and stuff</h1>
    </body>
  </>
);

export default Index;
