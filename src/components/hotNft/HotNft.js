import React from "react";
import styled from "styled-components";
import Hand from "../images/hand.png";
import Scanner from "../images/intro_video.gif";
import Ballon from "../images/ballon.png";
import circles from "../images/circle-top.png";
import { BsFillCheckCircleFill } from "react-icons/bs";
import {
  Heading,
  MainWrapper,
  Text,
  TextHeading,
  TextHeadingCrypto,
  TextHeadingTravel,
  TextParagraph,
  TextPayment,
  TextTravel,
  TextWallet,
  TextWrapper,
  HandImage,
  TextHandImage,
  ScannerImage,
  TextScanImage,
  BallonImage,
  TextBallon,
  Button,
  TextWeb,
  CircleIcon,
  TextWebHeading,
  CircleImage,
} from "./HotNftsStyle";

const HeadingWrapper = styled.div`
  padding: 80px 10px 0px 0;
  display: flex;
  margin-left: 15%;
  @media (max-width: 768px) {
    margin-left: 6%;
    padding: 30px 10px 0px 0;
  }
`;

const HotNft = () => {
  return (
    <>
      <MainWrapper>
        <HeadingWrapper>
          <Heading>Hot Products</Heading>
        </HeadingWrapper>
        <TextWrapper>
          <TextPayment>
            <Text>
              <TextHandImage>
                <HandImage src={Hand} />
                <CircleImage src={circles} />
              </TextHandImage>
              <TextParagraph>TOP-CLASS</TextParagraph>
              <TextHeading>PAYMENT GATEWAY</TextHeading>
            </Text>
          </TextPayment>

          <TextWallet>
            <TextWeb>
              <CircleIcon>
                <BsFillCheckCircleFill />
              </CircleIcon>
              <TextWebHeading>WEB 3.0</TextWebHeading>
            </TextWeb>
            <Text>
              <TextScanImage>
                <ScannerImage src={Scanner} />
              </TextScanImage>
              <TextParagraph>MOST TRUSTED & SECURE</TextParagraph>
              <TextHeadingCrypto>CRYPTO WALLET</TextHeadingCrypto>
            </Text>
          </TextWallet>

          <TextTravel>
            <Text>
              <TextBallon>
                <BallonImage src={Ballon} />
              </TextBallon>
              <TextHeadingTravel>TRAVEL</TextHeadingTravel>
              <TextParagraph>THE WORLD WITH CRYPTO</TextParagraph>
              <Button>Learn more</Button>
            </Text>
          </TextTravel>
        </TextWrapper>
      </MainWrapper>
    </>
  );
};

export default HotNft;
