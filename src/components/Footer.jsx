import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  MailOutline,
  Phone,
  Room,
  Twitter,
} from "@mui/icons-material";
import React from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>SA2.</Logo>
        <Desc>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos vel
          odio reprehenderit repellat, rem fuga ratione fugiat necessitatibus a
          iure quo aliquid architecto repellendus laudantium dolor consequuntur
          commodi optio dolores animi eligendi officiis. Sed, dolore?
        </Desc>
        <SocialContainer>
          <SocialIcon
            href="https://facebook.com/sa2avro"
            target="_blank"
            color="3b5999"
          >
            <Facebook />
          </SocialIcon>
          <SocialIcon
            href="https://twitter.com/sa3akash"
            target="_blank"
            color="00acee"
          >
            <Twitter />
          </SocialIcon>
          <SocialIcon
            href="https://linkedin.com/in/sa3akash"
            target="_blank"
            color="0072b1"
          >
            <LinkedIn />
          </SocialIcon>
          <SocialIcon
            href="https://github.com/sa3akash"
            target="_blank"
            color="171515"
          >
            <GitHub />
          </SocialIcon>
          <SocialIcon
            href="https://instagram.com/sa3akash"
            target="_blank"
            color="8a3ab9"
          >
            <Instagram />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <ListTitle>Usefull Links</ListTitle>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>My Fashion</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Traking</ListItem>
          <ListItem>WishList</ListItem>
          <ListItem>Accessorise</ListItem>
          <ListItem>Trums & conditon</ListItem>
        </List>
      </Center>
      <Right>
        <RightTitle>Contact</RightTitle>
        <ContactItem>
          <Room />
          632 Sherpur , Sherper Town 2100
        </ContactItem>
        <ContactItem>
          <Phone />
          +88 01312-858569
        </ContactItem>
        <ContactItem>
          <MailOutline />
          sa2avroo@gmail.com
        </ContactItem>
      </Right>
    </Container>
  );
};

export default Footer;

const Container = styled.div`
  display: flex;
  align-items: center;
  ${mobile({
    display: "block",
  })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1`
  font-weight: bold;
  font-size: 45px;
`;
const Desc = styled.p`
  margin: 20px 0;
`;
const SocialContainer = styled.div`
  display: flex;
  align-items: center;
`;
const SocialIcon = styled.a`
  width: 40px;
  height: 40px;
  background: #${(props) => props.color};
  margin-right: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
`;

const ListTitle = styled.h3`
  margin-bottom: 30px;
  font-weight: bold;
  font-size: 25px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const RightTitle = styled.h3`
  font-weight: bold;
  font-size: 25px;
  margin-bottom: 20px;
`;
const ContactItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg {
    margin-right: 5px;
  }
`;
