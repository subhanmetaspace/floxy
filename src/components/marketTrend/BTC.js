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

const BTC = () => {
  return (
    <>
      <TextMainWrapper>
        <TextRoot>
          <RecentlyUploadedHeader>
            <HeadingText>Currency</HeadingText>
            <HeadingText>Latest Price</HeadingText>
            <HeadingText>24h Charges</HeadingText>
            <HeadingText>24h Highest Price</HeadingText>
            <HeadingText>24h Lowest Price</HeadingText>
            <HeadingText>Transaction Quantity</HeadingText>
            <HeadingText>Price Trend</HeadingText>
            <HeadingText>Operate</HeadingText>
          </RecentlyUploadedHeader>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~56456.00</Text>
            <Text>0.~987</Text>
            <Text>00</Text>
            <Text>0.~56456.00</Text>
            <Text>0.~987.00</Text>
            <Text PriceTrend>- - - - -</Text>
            <ButtonWrapper>
              <Button>Trade Now</Button>
            </ButtonWrapper>
          </RecentlyUploaded>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~56456.00</Text>
            <Text>0.~987</Text>
            <Text>00</Text>
            <Text>0.~56456.00</Text>
            <Text>0.~987.00</Text>
            <Text priceTrend>- - - - -</Text>
            <ButtonWrapper>
              <Button>Trade Now</Button>
            </ButtonWrapper>
          </RecentlyUploaded>

          <RecentlyUploaded>
            <Text>ETH/BTC</Text>
            <Text>0.~56456.00</Text>
            <Text>0.~987</Text>
            <Text>00</Text>
            <Text>0.~56456.00</Text>
            <Text>0.~987.00</Text>
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

export default BTC;
