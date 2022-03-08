import styled from "styled-components";
import React from "react";
import { Send } from "@mui/icons-material";

const NewsLetter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Decs>Get Monthly Updates from your Favorite Products</Decs>
      <InputContainer>
        <Input placeholder="Your Email..."/>
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
`;
const Decs = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
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
`;
const Input = styled.input`
    flex: 9;
    font-size: 16px;
    border: none;
    outline: none;
    padding: 0 20px;
`;
const Button = styled.button`
    flex:1;
    height: 100%;
    border: none;
    background-color: teal;
    color: white;
    overflow: hidden;
`;
