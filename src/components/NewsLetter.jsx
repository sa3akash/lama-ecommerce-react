import styled from "styled-components";
import React from "react";
import { Send } from "@mui/icons-material";
import { mobile } from "../Responsive";

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Decs>Get Monthly Updates from your Favorite Products</Decs>
      <InputContainer>
        <Input placeholder="Your Email..." type='email'/>
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default NewsLetter;

const Container = styled.div`
  height: 60vh;
  background: #fcf5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  font-weight: bold;
  ${mobile({
    fontSize: "40px",
  })}
`;
const Decs = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({
    textAlign: "center",
    padding: "10px",
  })}
`;
const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid lightgray;
  border-radius: 5px;
  ${mobile({
    width: "80%",
  })}
`;
const Input = styled.input`
  flex: 9;
  font-size: 16px;
  border: none;
  outline: none;
  padding: 0 20px;
  ${mobile({
    flex: "7",
  })}
`;
const Button = styled.button`
  flex: 1;
  height: 100%;
  border: none;
  background-color: teal;
  color: white;
  overflow: hidden;
  ${mobile({
    flex: "3",
  })}
`;
