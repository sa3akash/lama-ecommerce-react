import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcment from "../components/Announcment";
import Footer from "../components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../Responsive";

const Cart = () => {
  return (
    <>
      <Navbar />
      <Announcment />
      <Wrapper>
        <Title>Your Bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Your Bag (4)</TopText>
            <TopText>Your WishList (0)</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout Now</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="/img/3.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>SA2 THUNDERD SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>7858965
                  </ProductId>
                  <ProductColor color="ff6347" />
                  <ProductSize>
                    <b>SIZE: </b>38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount> 2 </ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>

            <Hr />

            <Product>
              <ProductDetail>
                <Image src="/img/1.png" />
                <Details>
                  <ProductName>
                    <b>Product: </b>SA2 THUNDERD SHOES
                  </ProductName>
                  <ProductId>
                    <b>ID: </b>7858965
                  </ProductId>
                  <ProductColor color="ff6347" />
                  <ProductSize>
                    <b>SIZE: </b>38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmmountContainer>
                  <Add />
                  <ProductAmmount> 2 </ProductAmmount>
                  <Remove />
                </ProductAmmountContainer>
                <ProductPrice>$ 30</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItem>
              <span>Sub Total</span>
              <span>$ 80</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>$ 5</span>
            </SummaryItem>
            <SummaryItem>
              <span>Discount</span>
              <span>$ -5</span>
            </SummaryItem>
            <SummaryItem type="total">
              <span>Total</span>
              <span>$ 80</span>
            </SummaryItem>
            <Button>CheckOut Now</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Cart;

const Wrapper = styled.div`
  padding: 20px;
`;
const Title = styled.h1`
  font-weight: 300;
  font-size: 40px;
  text-align: center;
  ${mobile({ marginBottom: "10px" })}
`;
const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0" })}
`;
const TopButton = styled.button`
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};

  ${mobile({ padding: "5px", fontSize: "14px" })}
`;
const TopTexts = styled.div``;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0 10px;
  text-transform: uppercase;

  ${mobile({ display: "block", fontSize: "14px", marginBottom: "5px" })}
`;
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ padding: "0", display: "block", margin: "20px 0" })}
`;
const Info = styled.div`
  flex: 3;
`;
const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ display: "block", width: "100%", margin: "20px 0" })}
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
  ${mobile({ display: "block", textAlign: "center" })}
`;
const Image = styled.img`
  margin: 20px 0;
  width: 300px;
  height: 200px;
  object-fit: cover;
  ${mobile({
    margin: "0",
    width: "70%",
    height: "50%",
    overflow: "hidden",
    margin: "10px 0",
  })}
`;
const Details = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-around;
  b {
    color: black;
    font-size: 16px;
    font-weight: bold;
  }
  ${mobile({ padding: "10px 0", display: "block" })}
`;
const ProductName = styled.h3`
  font-size: 22px;
  ${mobile({ fontSize: "18px", margin: "10px 0" })}
`;
const ProductId = styled.span`
  font-size: 20px;
  ${mobile({ fontSize: "18px", margin: "10px 0", display: "block" })}
`;
const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: #${(p) => p.color};
  cursor: pointer;
  ${mobile({ margin: "10px auto", display: "block" })}
`;
const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  ${mobile({
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "10px 0 40px 0",
  })}
`;
const ProductSize = styled.span`
  font-size: 20px;
`;
const ProductAmmountContainer = styled.span`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  ${mobile({ margin: "0" })}
`;
const ProductAmmount = styled.span`
  font-size: 24px;
  font-weight: bold;
  margin: 0 5px;
`;
const ProductPrice = styled.span`
  font-size: 30px;
  font-weight: 300;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 1px solid lightgray;
  padding: 20px;
  border-radius: 10px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  ${mobile({ display: "block", height: "40vh" })}
`;

const SummaryTitle = styled.div`
  font-size: 35px;
  font-weight: 200;
  ${mobile({ fontSize: "22px", marginTop: "20px" })}
`;
const SummaryItem = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "800"};
  font-size: ${(props) => (props.type === "total" ? "28px" : "24px")};
  ${mobile({ fontSize: "20px", margin: "20px 0" })}
`;
const Button = styled.button`
  width: 100%;
  padding: 10px;
  background: black;
  color: white;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  ${mobile({ fontSize: "16px", padding: "8px" })}
`;
