import React, { useEffect, useState } from "react";
import logo from "../images/bitcoin.png";
import styled from "styled-components";
import Pricetrendgraph from "../images/Pricetrendgraph.png";
import {
  Button,
  ButtonWrapper,
  HeadingText,
  Image,
  ImageWrapper,
  RecentlyUploaded,
  RecentlyUploadedHeader,
  Text,
  TextMainWrapper,
  TextRoot,
} from "./MarketTrendStyle";

const ETH = () => {
  return (
    <>
      <TextMainWrapper>
        <TextRoot>
          <RecentlyUploadedHeader>
            <HeadingText>Currency</HeadingText>
            <HeadingText>Latest Price</HeadingText>
            <HeadingText>24h Charges</HeadingText>
            <HeadingText>24h Higest price</HeadingText>
            <HeadingText>24 lowest price</HeadingText>
            <HeadingText>Transaction quantity</HeadingText>
            <HeadingText>price trend</HeadingText>
            <HeadingText>Operate</HeadingText>
          </RecentlyUploadedHeader>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~3475.00</Text>
            <Text>0.~000</Text>
            <Text>00</Text>
            <Text>0.~3475.00</Text>
            <Text>0.2345</Text>
            <Text PriceTrend>- - - - -</Text>
            <ButtonWrapper>
              <Button>Trade Now</Button>
            </ButtonWrapper>
          </RecentlyUploaded>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~3475.00</Text>
            <Text>0.~000</Text>
            <Text>00</Text>
            <Text>0.~3475.00</Text>
            <Text>0.2345</Text>
            <Text PriceTrend>- - - - -</Text>

            <ButtonWrapper>
              <Button>Trade Now</Button>
            </ButtonWrapper>
          </RecentlyUploaded>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~3475.00</Text>
            <Text>0.~000</Text>
            <Text>00</Text>
            <Text>0.~3475.00</Text>
            <Text>0.2345</Text>
            <Text PriceTrend>- - - - -</Text>
            <ButtonWrapper>
              <Button>Trade Now</Button>
            </ButtonWrapper>
          </RecentlyUploaded>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~3475.00</Text>
            <Text>0.~000</Text>
            <Text>00</Text>
            <Text>0.~3475.00</Text>
            <Text>0.2345</Text>
            <ImageWrapper>
              <Image src={Pricetrendgraph} />
            </ImageWrapper>
            <ButtonWrapper>
              <Button>Trade Now</Button>
            </ButtonWrapper>
          </RecentlyUploaded>
        </TextRoot>
      </TextMainWrapper>
    </>
  );
};

export default ETH;
