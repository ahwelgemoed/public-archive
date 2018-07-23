import React from 'react';
import { Tile, Title, Box, Container  } from 'bloomer';

const body = () => {
  return (
    <div>
     <Container style={{ marginTop: 10 }}>
        <Tile isAncestor>
        <Tile isSize={5} isVertical isParent>
            <Tile isChild render={
                props => (
                    <Box {...props}>
                        <Title>Tech_Lang</Title>
                        <ul>
                          <li>ReactJS</li>
                          <li>HTML/CSS (SASS)</li>
                          <li>Javascript (ES6)</li>
                          <li>Laravel/PHP</li>
                          <li>Wordpress</li>
                          <li>MySQL</li>
                          <li>Figma</li>
                          <li>GIT</li>
                        </ul>
                    </Box>
                )
            } />
            <Tile isChild render={
                props => (
                    <Box {...props}>
                        <Title>Worked_On</Title>
                        <p>Projects I've worked on can be seen on my GitHub page. They include some corporate work, open source work and some personal app ideas</p>
                        <div className='is-pulled-right'>
                        <h4 style={{ marginTop: 5 }}>Links</h4>
                        <p>
                          <a href="http://www.shop.minema.co.za" target="_blank">Minema</a> |
                          <a href="http://www.disnetjy.com" target="_blank"> Dis Net Jy</a> |
                          <a href="https://github.com/ahwelgemoed/Commute" target="_blank"> Commute </a>
                      </p>
                      </div>
                    </Box>
                )
            } />
        </Tile>
        <Tile isParent>
            <Tile isChild render={
                props => (
                    <Box {...props}>
                        <Title>About_Me</Title>
                        <p>I'm a Graphic and Web Designer/Developer currently in working in Stellenbosch. I have a love of robust and beautifully designed software. I like getting my hands dirty in the Front-End and Back-End, currently I'm mostly programming in Laravel. I’m also currently learning React and React Native. I'm always looking for new challenges when it comes to Code. I have a Certificate in Web Design and Graphic Design from Friends of Design Cape Town. I have a secondary love for UI/UX and assessing user statistics, seeing trends and optimizing design/software to fit and flow better. I enjoy technology, music, poetry, playing guitar and taking photos on my Fujifilm.</p>
                        <div className='is-pulled-right'>
                        <h4 style={{ marginTop: 10 }}>Contact</h4>
                        <h5>arno.welgemoed@outlook.com</h5>
                        <p>
                        <a href="https://github.com/ahwelgemoed" target="_blank">GitHub</a> |  
                        <a href="https://www.instagram.com/ahwelgemoed/" target="_blank"> Instagram</a> |  
                        <a href="https://www.linkedin.com/in/arnowelgemoed/" target="_blank"> LinkedIn</a>
                        </p>
                        🇿🇦 📷 🎸📕 
                      </div>
                    </Box>
                )
            } />
            
        </Tile>
        
        
    </Tile>
    </Container>
    </div>
  );
};

export default body;