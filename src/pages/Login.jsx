import React from "react";
import styled from "styled-components";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>SIGN IN</Title>
        <RegisterFrom>
          <input type="text" placeholder="Email / UserName..." />
          <input type="password" placeholder="Password" />
          <Aggrement>
            Forgot Password
            <a href="#">Click Here?</a>
          </Aggrement>
          <Aggrement>
            Don't have an Account
            <a href="#">Register Now?</a>
          </Aggrement>
          <Button>Loge In</Button>
        </RegisterFrom>
      </Wrapper>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url(https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?cs=srgb&dl=pexels-karolina-grabowska-4041392.jpg&fm=jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 20px;
`;
const RegisterFrom = styled.form`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  input {
    flex: 1;
    width: 60%;
    min-width: 40%;
    margin: 10px;
    padding: 10px;
  }
`;
const Aggrement = styled.span`
  margin-top: 20px;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 16px;
  display: block;
  width: 100%;
  a {
    margin-left: 10px;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;
const Button = styled.button`
  margin: 20px 10px;
  width: 40%;
  padding: 15px;
  border: none;
  text-transform: uppercase;
  background: teal;
  color: white;
  cursor: pointer;
`;
