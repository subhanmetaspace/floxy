import React from "react";
import graphIcon from "../images/graph.png";
import Bitcoin from "../images/bitcoin.png";
import Bnggraph from "../images/Bnbgraph.png";
import EthGraph from "../images/EthGraph.png";
import Bnb from "../images/bnb.png";
import Etherium from "../images/etherium.png";
import {
  BoldNumberWrapper,
  Button,
  ButtonWrapper,
  CardWrapper,
  Container,
  Image,
  ImageTextWrapper,
  ImageWrapper,
  NumberBoldText,
  NumberText,
  Root,
  Text,
  TextGraphWrapper,
  TextWrapper,
  Wrapper,
} from "./CoinStyled";

const Coin = () => {
  return (
    <Root>
      <Container>
        <Wrapper>
          <CardWrapper>
            <ImageTextWrapper>
              <ImageWrapper>
                <Image src={Bitcoin} />
              </ImageWrapper>
              <TextWrapper>
                <Text>BTC</Text>
              </TextWrapper>
            </ImageTextWrapper>
            <ButtonWrapper>
              <Button> -1.12%</Button>
            </ButtonWrapper>
          </CardWrapper>
          <TextGraphWrapper>
            <BoldNumberWrapper>
              <NumberBoldText>$123445.52</NumberBoldText>
              <NumberText> ~ $24123.43</NumberText>
            </BoldNumberWrapper>

            <ImageWrapper>
              <Image src={graphIcon} />
            </ImageWrapper>
          </TextGraphWrapper>
        </Wrapper>

        <Wrapper>
          <CardWrapper>
            <ImageTextWrapper>
              <ImageWrapper>
                <Image src={Etherium} />
              </ImageWrapper>
              <TextWrapper>
                <Text>ETH</Text>
              </TextWrapper>
            </ImageTextWrapper>
            <ButtonWrapper>
              <Button GreenText> +1.12%</Button>
            </ButtonWrapper>
          </CardWrapper>
          <TextGraphWrapper>
            <BoldNumberWrapper>
              <NumberBoldText>$123445.52</NumberBoldText>
              <NumberText> ~ $24123.43</NumberText>
            </BoldNumberWrapper>

            <ImageWrapper>
              <Image src={EthGraph} />
            </ImageWrapper>
          </TextGraphWrapper>
        </Wrapper>

        <Wrapper>
          <CardWrapper>
            <ImageTextWrapper>
              <ImageWrapper>
                <Image src={Bnb} />
              </ImageWrapper>
              <TextWrapper>
                <Text>BNB</Text>
              </TextWrapper>
            </ImageTextWrapper>
            <ButtonWrapper>
              <Button GreenText> 0.00%</Button>
            </ButtonWrapper>
          </CardWrapper>
          <TextGraphWrapper>
            <BoldNumberWrapper>
              <NumberBoldText>$123445.52</NumberBoldText>
              <NumberText> ~ $24123.43</NumberText>
            </BoldNumberWrapper>

            <ImageWrapper>
              <Image src={Bnggraph} />
            </ImageWrapper>
          </TextGraphWrapper>
        </Wrapper>
      </Container>
    </Root>
  );
};

export default Coin;
