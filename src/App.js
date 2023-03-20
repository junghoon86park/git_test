import React, { Component } from 'react'
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';

import Fullpage, { FullPageSections, FullpageSection } from '@ap.cx/react-fullpage'
/* css */
import './test_index.css'
/* //css */
/* img */
import spaceBg from  './img/space.jpg';
import spaceBgOne from  './img/space_bg.jpeg';
import spaceBgTwo from  './img/space_bg1.jpeg';
import moutainBg from  './img/m1.jpg';
/* //img */


const NavU = styled(Nav)`
  width:100%;
  height:30px;
  display:flex;
  line-height:30px;
  padding:10px;
`;
const NavL = styled(Navbar)`
  text-align:center;
  flex:1;
`;
const NavD = styled.div`
  width:30%;
  display:flex;
  color:#fff;
  font-size:16px;
`;

function App() {
  return (
    <>
      <Fullpage>
        <FullPageSections>
          <FullpageSection style={{
            backgroundColor: '#999',           
            padding: '1em',
          }}>
            <NavD>
              <NavU>
                <NavL>test1</NavL>
                <NavL>test2</NavL>
                <NavL>test3</NavL>
              </NavU>
            </NavD>
          </FullpageSection>
          <FullpageSection style={{
            backgroundColor: '#000',
            padding: '1em',
          }}>2</FullpageSection>
          <FullpageSection style={{
            backgroundColor: '#777',
            padding: '1em',
          }}>3</FullpageSection>
        </FullPageSections>
      </Fullpage>
    </>
  );
}

export default App;
