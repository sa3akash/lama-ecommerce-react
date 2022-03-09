import React from "react";
import styled from "styled-components";
import { popularProducts } from "../Data";
import Product from "./Product";
import { mobile } from "../Responsive";

const Products = () => {
  return (
    <Container>
      {popularProducts &&
        popularProducts.map((item) => <Product item={item} key={item.id} />)}
    </Container>
  );
};

export default Products;

const Container = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  ${mobile({
    padding: "0px",
    width: "100%",
  })}
`;
