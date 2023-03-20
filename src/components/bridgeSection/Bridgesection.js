import React from "react";
import Laptop from "../images/banner-img.png";
import { FaArrowRight } from "react-icons/fa";
import {
  Button,
  ButtonWrapper,
  Container,
  GetInTouch,
  GetInTouchWrapper,
  Image,
  ImageWrapper,
  InnerButtonCOntainer,
  LearnMore,
  LearnMoreWrapper,
  LeftSideContainer,
  Paragraph,
  ParagraphnWrapper,
  RightSideContainer,
  Root,
  Span,
  Text,
  TextWrapper,
  Wrapper,
} from "./BridgeSectionstyle";

const Bridgesection = () => {
  return (
    <Root>
      <Container>
        <LeftSideContainer>
          <LearnMoreWrapper>
            <LearnMore>Cages are now in Beta - Learn More</LearnMore>
            <Span>
              <FaArrowRight></FaArrowRight>
            </Span>
          </LearnMoreWrapper>
          <TextWrapper>
            <Text>Bridge </Text>
            <Text>the encrypted</Text>
            <Text> world </Text>
          </TextWrapper>
          <ParagraphnWrapper>
            <Paragraph>An Exchange that belongs to everyone</Paragraph>
          </ParagraphnWrapper>
          <InnerButtonCOntainer>
            <ButtonWrapper>
              <Button>Register</Button>
            </ButtonWrapper>
            <GetInTouchWrapper GetInTouch>
              <GetInTouch>Get in touch</GetInTouch>
            </GetInTouchWrapper>
          </InnerButtonCOntainer>
        </LeftSideContainer>
        <RightSideContainer>
          <ImageWrapper>
            <Image src={Laptop} />
          </ImageWrapper>
        </RightSideContainer>
      </Container>
    </Root>
  );
};

export default Bridgesection;
