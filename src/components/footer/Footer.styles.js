import styled from "styled-components";

export const Root = styled.div`
  background-color: #141619;
  z-index: 1;
  padding: 50px 150px 50px 100px;
  @media (max-width: 768px) {
    padding: 30px;
  }
`;

export const FooterOptionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterSubscribeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 0;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FooterCopyRightWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const FooterList = styled.div``;

export const FooterListHeading = styled.div`
  color: rgb(171, 171, 171);
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    margin-top: 50px;
    margin-bottom: 0;
  }
`;

export const FooterListElement = styled.div`
  color: rgb(255, 255, 255);
  cursor: pointer;

  padding-top: 15px;
  font-size: 16px;
  font-weight: 500;
`;

export const FooterLogo = styled.img``;

export const FooterFloxyEmail = styled.div`
  cursor: pointer;
  color: #fff;
  font-weight: 500;
`;

export const FooterIconsWrapper = styled.div``;

export const FooterLinkedInIcon = styled.i`
  color: #fff;
  margin-top: 10px;
  margin-right: 20px;
  cursor: pointer;
`;

export const FooterTwitterIcon = styled.div`
  color: #fff;
  cursor: pointer;
`;

export const FooterSubscribeHeading = styled.div`
  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

export const FooterSubscribeText = styled.div`
  color: rgb(255, 255, 255);
  font-size: 29px;
  font-weight: 500;
  line-height: 1.2;
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const FooterSubscribeInput = styled.input`
  padding: 22px 380px 22px 15px;
  background-color: #141619;
  color: rgb(171, 171, 171);
  font-size: 16px;
  border: 1px solid rgba(255, 255, 255, 0.24);
  border-radius: 10px;
  @media (max-width: 768px) {
    padding: 22px 10px;
    width: 94%;
  }
`;

export const FooterSubscribeInputWrapper = styled.div`
  position: relative;
  @media (max-width: 768px) {
    width: 86vw;
  }
`;

export const FooterSubscribeButton = styled.div`
  color: rgb(255, 255, 255);
  border: none;
  float: right;
  background-color: rgb(17, 19, 66);
  padding: 18px 40px;
  border-radius: 10px;
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  right: 3px;
  top: 3px;
  cursor: pointer;
`;

export const FooterCopyRightLink = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FooterHorizontalLine = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.12);
  margin: 10px 0px;
`;

export const FooterCopyRightText = styled.div`
  color: #fff;
  font-weight: 500;
  color: rgb(171, 171, 171);
`;

export const FooterSubscribeElement = styled.div`
  color: rgb(255, 255, 255);
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  margin-right: 50px;
`;
