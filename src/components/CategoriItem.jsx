import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const CategoriItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>SHOP NOW</Button>
      </InfoContainer>
    </Container>
  );
};

export default CategoriItem;

const Container = styled.div`
  flex: 1;
  margin: 10px;
  text-align: center;
  height: 70vh;
  position: relative;
  ${mobile({
    margin: "20px",
  })}
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const InfoContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.div`
  font-size: 40px;
  font-weight: bold;
  color: white;
  margin-bottom: 20px;
  ${mobile({
    textAlign: "center",
  })}
`;
const Button = styled.button`
  border: none;
  padding: 10px;
  background: white;
  cursor: pointer;
  color: gray;
  font-weight: 600;
`;
