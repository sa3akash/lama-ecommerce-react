import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";

const SingleProductPage = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Wrapper>
        <ImageContainer>
          <img
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
            alt="single products item"
          />
        </ImageContainer>
        <InfoContainer>
          <Title>Denim Jumpsuit</Title>
          <Desc>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            consequuntur debitis necessitatibus, deserunt aliquid quod harum
            quasi ipsum ut numquam corrupti eius cumque illo, voluptates nulla
            nobis voluptatum neque dolores facilis aut. Delectus, totam
            corporis.
          </Desc>
          <Price>$ 20</Price>
          <FillterContainer>
            <Fillter>
              <FillterTitle>Color:</FillterTitle>
              <FillterColor color="black" />
              <FillterColor color="gray" />
              <FillterColor color="pink" />
            </Fillter>
            <Fillter>
              <FillterTitle>Size: </FillterTitle>
              <FillterSelect>
                <option value="SM">SM</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </FillterSelect>
            </Fillter>
          </FillterContainer>
          <AddContainer>
            <AmmountContainer>
              <Remove />
              <Ammount>1</Ammount>
              <Add />
            </AmmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default SingleProductPage;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;
const ImageContainer = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
`;
const Title = styled.h1`
  font-weight: 200;
  margin: 20px 0;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const Price = styled.span`
  font-size: 40px;
  font-weight: 100;
`;

const FillterContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
  margin: 30px 0;
`;
const Fillter = styled.div`
  display: flex;
  align-items: center;
`;
const FillterTitle = styled.h2`
  margin-right: 10px;
  font-size: 20px;
  font-weight: 200;
`;
const FillterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${(props) => props.color};
  margin-right: 10px;
  cursor: pointer;
`;
const FillterSelect = styled.select`
  padding: 10px;
`;
const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const AmmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;
const Ammount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid teal;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    margin: 0 10px;
`;
const Button = styled.button`
    padding: 15px;
    border: 2px solid teal;
    background-color: white;
    cursor: pointer;
    font-weight: 500;
    &:hover{
        background-color: #f8f4f4;
    }
`;
