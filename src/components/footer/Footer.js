import React from "react";
import {
  FooterCopyRightLink,
  FooterCopyRightText,
  FooterCopyRightWrapper,
  FooterFloxyEmail,
  FooterHorizontalLine,
  FooterIconsWrapper,
  FooterLinkedInIcon,
  FooterList,
  FooterSubscribeElement,
  FooterListElement,
  FooterListHeading,
  FooterLogo,
  FooterOptionsWrapper,
  FooterSubscribeButton,
  FooterSubscribeHeading,
  FooterSubscribeInput,
  FooterSubscribeInputWrapper,
  FooterSubscribeText,
  FooterSubscribeWrapper,
  FooterTwitterIcon,
  Root,
} from "./Footer.styles";
import floxy_logo from "../images/logo-white.png";

const Footer = () => {
  return (
    <Root>
      <FooterOptionsWrapper>
        <FooterList>
          <FooterLogo src={floxy_logo}></FooterLogo>
          <FooterFloxyEmail>info@floxytrading.net</FooterFloxyEmail>
          <FooterIconsWrapper>
            <FooterLinkedInIcon className="fa fa-brands fa-linkedin" />
            <FooterTwitterIcon className="fa fa-brands fa-twitter" />
          </FooterIconsWrapper>
        </FooterList>
        <FooterList>
          <FooterListHeading>Floxy Trading</FooterListHeading>
          <FooterListElement>Why Floxy Trading?</FooterListElement>
          <FooterListElement>Platform</FooterListElement>
          <FooterListElement>Security</FooterListElement>
        </FooterList>
        <FooterList>
          <FooterListHeading>Solutions</FooterListHeading>
          <FooterListElement>Vulnerbility Management</FooterListElement>
          <FooterListElement>Security Operations</FooterListElement>
          <FooterListElement>Data Governance</FooterListElement>
          <FooterListElement>IT Blind Spots</FooterListElement>
          <FooterListElement>Business Continuity</FooterListElement>
        </FooterList>
        <FooterList>
          <FooterListHeading>Resources</FooterListHeading>
          <FooterListElement>Customer Stories</FooterListElement>
          <FooterListElement>Articles</FooterListElement>
          <FooterListElement>Press</FooterListElement>
        </FooterList>
        <FooterList>
          <FooterListHeading>Company</FooterListHeading>
          <FooterListElement>About</FooterListElement>
          <FooterListElement>Careers</FooterListElement>
          <FooterListElement>Contact</FooterListElement>
        </FooterList>
      </FooterOptionsWrapper>
      <FooterSubscribeWrapper>
        <FooterSubscribeHeading>
          <FooterSubscribeText>Get the latest updates.</FooterSubscribeText>
          <FooterSubscribeText>
            Subscribe for our newsletter
          </FooterSubscribeText>
        </FooterSubscribeHeading>
        <FooterSubscribeInputWrapper>
          {" "}
          <FooterSubscribeInput placeholder="Enter your email" />
          <FooterSubscribeButton>Subscribe</FooterSubscribeButton>
        </FooterSubscribeInputWrapper>
      </FooterSubscribeWrapper>
      <FooterHorizontalLine />
      <FooterCopyRightWrapper>
        <FooterCopyRightLink>
          <FooterSubscribeElement>privacy Policy</FooterSubscribeElement>
          <FooterSubscribeElement>Terms and Conditions</FooterSubscribeElement>
        </FooterCopyRightLink>
        <FooterCopyRightText>
          © Floxy Trading 2023 All rights reserved
        </FooterCopyRightText>
      </FooterCopyRightWrapper>
    </Root>
  );
};

export default Footer;
