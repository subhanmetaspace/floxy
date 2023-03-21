import React from "react";
import Laptop from "../images/qr-desktop.png";
import { GrAndroid } from "react-icons/gr";
import {
  Root,
  DownloadButton,
  ButtonInsideWrapper,
  ButtonInsideText,
  ButtonLargeText,
  ButtonSmallText,
  ButtonIcon,
  ButtonTextWrapper,
  LeftWrapper,
  RightWrapper,
  MainWrapper,
  HeadingText,
  Text,
  QRImage,
  ImageWrapper,
} from "./TradeSection.styles";

const TradeSection = () => {
  return (
    <Root>
      <MainWrapper>
        <LeftWrapper>
          <HeadingText>Trade anytime, anywhere</HeadingText>
          <Text>
            Whether APP OR WEB, you can quickly conduct your transactions
          </Text>
          <DownloadButton>
            <ButtonInsideWrapper>
              <ButtonIcon>
                <GrAndroid color="#fff" size={"1.35rem"} />
              </ButtonIcon>
              <ButtonTextWrapper>
                <ButtonSmallText>
                  Download the installation package
                </ButtonSmallText>
                <ButtonLargeText>Android</ButtonLargeText>
              </ButtonTextWrapper>
            </ButtonInsideWrapper>
          </DownloadButton>
        </LeftWrapper>

        <ImageWrapper>
          <QRImage src={Laptop}></QRImage>
        </ImageWrapper>
      </MainWrapper>
    </Root>
  );
};

export default TradeSection;
