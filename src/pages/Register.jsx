import React from "react";
import styled from "styled-components";

const Register = () => {
  return (
    <Container>
      <Wrapper>
        <Title>create an account</Title>
        <RegisterFrom>
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="text" placeholder="User Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Conform Password" />
          <Aggrement>
            By create an Account. I an sure your personal data will save,{" "}
            <b>Privacy Policy</b>{" "}
          </Aggrement>
          <Aggrement>
            You have an Account
            <a href='#'>Loge In</a>
          </Aggrement>
          <Button type="submit">create</Button>
        </RegisterFrom>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)), url(https://images.pexels.com/photos/2536965/pexels-photo-2536965.jpeg?cs=srgb&dl=pexels-suzy-hazelwood-2536965.jpg&fm=jpg);
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
    input{
        flex: 1;
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
    a{
        margin-left: 10px;
        text-decoration: none;
        &:hover{
            text-decoration: underline;
        }
    }
`;
const Button = styled.button`
    margin: 10px 10px;
    width: 40%;
    padding: 15px;
    border: none;
    text-transform: uppercase;
    background: teal;
    color: white;
    cursor: pointer;
`;
