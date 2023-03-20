import React from "react";
import styled from "styled-components";
import Icon1 from "../images/icon1.png";
import Icon2 from "../images/icon2.png";
import Icon3 from "../images/icon3.png";
import Icon4 from "../images/icon4.png";
import {
  Box,
  BoxWrapperOne,
  BoxWrapperTwo,
  Container,
  ImageWrapper,
  LeftsideWrapper,
  Paragraph,
  ParagraphWrapper,
  ParaWrapper,
  RightsideWrapper,
  RightWrapper,
  Root,
  Text,
  TextBox,
  TextBoxOne,
  TextDivOne,
  TextDivTwo,
  TextIcon,
  TextMainDiv,
  TextPara,
  TextWrapper,
  Verticalwrapper,
} from "./BeginnerSectionStyled";

const Image = styled.img``;

const BeginnerSection = () => {
  return (
    <Root>
      <Container>
        <LeftsideWrapper>
          <TextWrapper>
            <Text>Beginner's Guide</Text>
            <Text>Quick Trading</Text>
          </TextWrapper>
          <ParagraphWrapper>
            <Paragraph>An exchange that belongs to everyone</Paragraph>
          </ParagraphWrapper>
        </LeftsideWrapper>

        <RightWrapper>
          <TextMainDiv>
            <TextDivOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon1} />
                  </TextIcon>
                  <TextPara>CURRENCY TRADING</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon2} />
                  </TextIcon>
                  <TextPara>CONTRACT TRANSACTIONS</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon1} />
                  </TextIcon>
                  <TextPara>BITHUMB</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon2} />
                  </TextIcon>
                  <TextPara>CURRENCY TRADING</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon2} />
                  </TextIcon>
                  <TextPara>CONTRACT TRANSACTIONS</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon1} />
                  </TextIcon>
                  <TextPara>BITHUMB</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon2} />
                  </TextIcon>
                  <TextPara>CURRENCY TRADING</TextPara>
                </TextBox>
              </TextBoxOne>
            </TextDivOne>

            <TextDivTwo>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon1} />
                  </TextIcon>
                  <TextPara>CURRENCY TRADING</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon3} />
                  </TextIcon>
                  <ParaWrapper>
                    {" "}
                    <TextPara>BITFINEX</TextPara>
                  </ParaWrapper>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon4} />
                  </TextIcon>
                  <TextPara>OPTIONS CONTRACT</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon1} />
                  </TextIcon>
                  <TextPara>CURRENCY TRADING</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon3} />
                  </TextIcon>
                  <ParaWrapper>
                    {" "}
                    <TextPara>BITFINEX</TextPara>
                  </ParaWrapper>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon4} />
                  </TextIcon>
                  <TextPara>OPTIONS CONTRACT</TextPara>
                </TextBox>
              </TextBoxOne>
              <TextBoxOne>
                <TextBox>
                  <TextIcon>
                    <Image src={Icon1} />
                  </TextIcon>
                  <TextPara>CURRENCY TRADING</TextPara>
                </TextBox>
              </TextBoxOne>
            </TextDivTwo>
          </TextMainDiv>
        </RightWrapper>
      </Container>
    </Root>
  );
};

export default BeginnerSection;
