import React,{useState} from "react";
import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";
import {sliderItems} from '../Data'

const Slider = () => {
  const [slideIndex,setSlideIndex]=useState(0)

  const handleClick = (direction)=>{
   if(direction==='left'){
     setSlideIndex(slideIndex > 0 ? slideIndex-1 : 2)
   }else{
    setSlideIndex(slideIndex < 2 ? slideIndex+1 : 0)
   }
  }

  return (
    <Container>
      {/* left arrow */}
      <Arrow direction="left" onClick={()=> handleClick('left')}>
        <ArrowLeftOutlined />
      </Arrow>
      {/* left arrow end */}

      <WrapperSlider slideIndex={slideIndex}>

        {
          sliderItems && sliderItems.map((item)=>(
            <SliderCon key={item.id}>
                <SlidContainer bg ={item.bg}>
                  <ImageContainer>
                    <Img src={item.img} />
                  </ImageContainer>
                  <Info>
                      <Title>{item.title}</Title>
                      <Desc>{item.desc}</Desc>
                      <Button>SHOP NOW</Button>
                  </Info>
                </SlidContainer>
            </SliderCon>
          ))
        }


        
       
      </WrapperSlider>

      {/* right arrow */}
      <Arrow direction="right" onClick={()=> handleClick('right')}>
        <ArrowRightOutlined />
      </Arrow>
      {/* right arrow */}
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background: #5c5353;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  opacity: 0.5;
  z-index: 99;
`;

const WrapperSlider = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  transform: translateX(${props=>props.slideIndex*-100}vw);
  transition: 0.5s;
`;

const SliderCon = styled.div`
 
  width: 100%;
  height: 100%;
 
`
const SlidContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background: #${props=> props.bg};
`;
const Info = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
    font-size: 70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;


const ImageContainer = styled.div`
  flex: 1;
  height: 100%;
`;

const Img = styled.img`
    height: 80%;
`;


// 39 37 00