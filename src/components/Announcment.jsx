import React from "react";
import styled from "styled-components";

const Announcment = () => {
  return <Container>Super Deal! free shiping on order 50$</Container>;
};

export default Announcment;

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
  font-weight: 500;
`;
