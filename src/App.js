import { Navbar, Nav } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFlip, Pagination, Navigation } from "swiper";

import styled from 'styled-components';
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import './test_index.css'

import BgOne from  './img/space_bg.jpeg';
import BgTwo from  './img/space_bg1.jpeg';

const Container = styled.div`
  width:100%;
`;
const MainBg = styled.div`
  background-color:#fff;  
`;
function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="chk">
      <Container>
          <Nav className="me-auto">
            <Nav.Link href="https://www.naver.com" target="_blank">네이버</Nav.Link>
            <Nav.Link href="https://www.daum.net" target="_blank">다음</Nav.Link>
            <Nav.Link href="https://phpschool.com" target="_blank">phpschool</Nav.Link>
          </Nav>
          <MainBg>
            <Swiper modules={[EffectFlip, Pagination, Navigation]} effect="flip" pagination={true} navigation={true} loop={true}>
              <SwiperSlide testchk="111" style={{ backgroundImage: `url(${BgOne})` }}></SwiperSlide>
              <SwiperSlide testchk="112" style={{ backgroundImage: `url(${BgTwo})` }}></SwiperSlide>
              <SwiperSlide testchk="113" style={{ backgroundImage: `url(${BgOne})` }}></SwiperSlide>              
            </Swiper>
          </MainBg>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
