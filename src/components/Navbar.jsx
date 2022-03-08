import React from 'react';
import styled from "styled-components";
import { Search,ShoppingCartOutlined } from '@mui/icons-material';
import {Badge} from '@mui/material';



const Navbar = () => {
  return (
    <NavbarContainer>
      <WrapperContainer>

        <Left>
            <Language>EN</Language>
            <SearchContainer>
                <Input />
                <Search style={{color:'gray',fontSize: '20px'}}/>
            </SearchContainer>
        </Left>

        <Center>
            <Logo>SA2.</Logo>
        </Center>

        <Right>
        
        <MenuItem> Register </MenuItem>
        <MenuItem> Sign In </MenuItem>
        <MenuItem> 
            <Badge badgeContent={4} color="primary">
                <ShoppingCartOutlined color="action" />
            </Badge>
        </MenuItem>
        </Right>

      </WrapperContainer>
    </NavbarContainer>
  );
};

export default Navbar;

// style your components

const NavbarContainer = styled.div`
  height: 60px;
`;
const WrapperContainer = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

// left side start

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 16px;
  cursor: pointer;
`;
const SearchContainer = styled.span`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Input = styled.input`
    border: none;
    outline: none;
`
// left side end


const Center = styled.div`
  flex: 1;
`;

const Logo = styled.h1`
    font-weight: bold;
    text-align: center;
    font-size: 40px;
`
// center side end
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const MenuItem = styled.div`
    font-size: 16px;
    margin-left: 25px;
`
