import React from 'react';
import { Hero, Title,HeroBody,Container,Subtitle } from 'bloomer';
import FontAwesome from 'react-fontawesome';

const head = () => {
  return (
    <div>
      <Hero isColor='light' isSize='medium'>
      <HeroBody>
          <Container className="whitehead" hasTextAlign='centered'>
              <Title className="whitehead">AH Welgemoed</Title>
              <Subtitle className="whitehead-small">Design_Develop</Subtitle>
              <a href="https://github.com/ahwelgemoed" target="_blank"><i class="fab fa-github"></i></a>
              <a href="https://www.instagram.com/ahwelgemoed/" target="_blank"><i class="fab fa-instagram"></i></a>
          </Container>
      </HeroBody>
      </Hero>
    
    </div>
  );
};

export default head;