import {
  FavoriteBorderOutlined,
  Search,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle></Circle>
      <Image src={item.img} />
      <InfoContainer>
        <Icon>
          <ShoppingCartOutlined />
        </Icon>
        <Icon>
          <Search />
        </Icon>
        <Icon>
          <FavoriteBorderOutlined />
        </Icon>
      </InfoContainer>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  margin: 5px;
  flex: 1;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  ${mobile({
    width: "100%",
    margin: "20px",
    overflow: "hidden",
  })}
`;
const Circle = styled.div`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  background: white;
  position: absolute;
`;
const Image = styled.img`
  width: 75%;
  z-index: 2;
`;

const InfoContainer = styled.div`
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.2);
  z-index: 4;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease-in;
  &:hover {
    opacity: 1;
  }
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    background: #e9f5f5;
    transform: scale(1.2);
  }
`;
