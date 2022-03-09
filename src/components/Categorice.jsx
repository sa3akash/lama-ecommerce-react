import React from "react";
import styled from "styled-components";
import CategoriItem from "./CategoriItem";
import { categories } from "../Data";
import { mobile } from "../Responsive";

const Categorice = () => {
  return (
    <Container>
      {categories &&
        categories.map((item) => <CategoriItem item={item} key={item.id} />)}
    </Container>
  );
};

export default Categorice;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({
    display: "block",
    padding: "0",
  })}
`;
