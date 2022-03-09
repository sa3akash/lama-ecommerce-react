import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Products from "../components/Products";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import { mobile } from "../Responsive";

const ProductsPages = () => {
  return (
    <Container>
      <Navbar />
      <Announcment />
      <Title>Dresses</Title>
      <FiltterContainer>
        <Filtter>
          <FillterText>Filtter Products:</FillterText>
          <Select>
            <SelectOption disabled selected>
              Color
            </SelectOption>
            <SelectOption>White</SelectOption>
            <SelectOption>Red</SelectOption>
            <SelectOption>Yellow</SelectOption>
            <SelectOption>Green</SelectOption>
            <SelectOption>Blue</SelectOption>
            <SelectOption>Blaxk</SelectOption>
            <SelectOption>Tomato</SelectOption>
          </Select>
          <Select>
            <SelectOption disabled selected>
              Size
            </SelectOption>
            <SelectOption>XS</SelectOption>
            <SelectOption>S</SelectOption>
            <SelectOption>M</SelectOption>
            <SelectOption>L</SelectOption>
            <SelectOption>XL</SelectOption>
            <SelectOption>XXL</SelectOption>
          </Select>
        </Filtter>
        <Filtter>
          <FillterText>Sort Products:</FillterText>
          <Select>
            <SelectOption disabled selected>
              Newest
            </SelectOption>
            <SelectOption>Price ( asc )</SelectOption>
            <SelectOption>Price ( dsc )</SelectOption>
          </Select>
        </Filtter>
      </FiltterContainer>
      <Products />
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default ProductsPages;

const Container = styled.div``;
const Title = styled.h1`
  margin: 20px;
`;
const FiltterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Filtter = styled.div`
  margin: 20px;
`;

const FillterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ margin: "0", paddingBottom: "10px", display: "inline-block" })}
`;
const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ marginRight: "0", marginBottom: "10px", display: "block" })}
`;
const SelectOption = styled.option``;
