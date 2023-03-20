import React from "react";
import floxy_logo from "../images/logo-white.png";
import drop_down_icon from "../images/dropdownicon.png";
import {
  DropDownWrapper,
  LogoWrapper,
  NavButtonsWrapper,
  NavWrapper,
  Logo,
  Root,
  Button,
  DropDown,
  SmallDeviceNavBar,
  DropDownOptionsMobile,
  LoginButton,
  DropDownMobile,
  Link,
  AngleIcon,
  LinkWrapper,
  DropDownOptions,
  List,
  MenuIconWrapper,
  MenuIcon,
  MobileNavOptions,
  CloseIcon,
  NavOptionsWrapper,
} from "./Navbar.styles";

const Navbar = ({
  showCrypto,
  setShowCrypto,
  showTrade,
  setShowTrade,
  showDerivatives,
  setShowDerivatives,
  navOptions,
  setNavOptions,
}) => {
  return (
    <Root>
      <NavWrapper>
        <DropDownWrapper>
          <LogoWrapper>
            <Logo src={floxy_logo}></Logo>
          </LogoWrapper>
          <DropDown
            onClick={(e) => {
              setShowCrypto(!showCrypto);
              setShowDerivatives(false);
              setShowTrade(false);
              e.stopPropagation();
            }}
          >
            <Link>Buy Crypto </Link>
            {showCrypto ? (
              <AngleIcon className="fa fa-thin fa-angle-up" />
            ) : (
              <AngleIcon className="fa fa-thin fa-angle-down" />
            )}
            {showCrypto && (
              <DropDownOptions>
                <List>Fast Trade</List>
                <List>P2P</List>
              </DropDownOptions>
            )}
          </DropDown>
          <DropDown
            onClick={(e) => {
              setShowTrade(!showTrade);
              setShowCrypto(false);
              setShowDerivatives(false);
              e.stopPropagation();
            }}
          >
            <Link>Trade </Link>
            {showTrade ? (
              <AngleIcon className="fa fa-thin fa-angle-up" />
            ) : (
              <AngleIcon className="fa fa-thin fa-angle-down" />
            )}
            {showTrade && (
              <DropDownOptions>
                <List>Spot Trading</List>
                <List>Strategy Trading</List>
                <List>Floxypay Convert</List>
              </DropDownOptions>
            )}
          </DropDown>
          <DropDown
            onClick={(e) => {
              setShowDerivatives(!showDerivatives);
              setShowCrypto(false);
              setShowTrade(false);
              e.stopPropagation();
            }}
          >
            <Link>Derivatives </Link>
            {showDerivatives ? (
              <AngleIcon className="fa fa-thin fa-angle-up" />
            ) : (
              <AngleIcon className="fa fa-thin fa-angle-down" />
            )}
            {showDerivatives && (
              <DropDownOptions>
                <List>Futures Classic</List>
                <List>Futures Lite</List>
              </DropDownOptions>
            )}
          </DropDown>
          <LinkWrapper>
            <Link>Innovation Lab</Link>
          </LinkWrapper>
          <LinkWrapper>
            <Link>Announcements</Link>
          </LinkWrapper>
        </DropDownWrapper>
        <NavButtonsWrapper>
          <LinkWrapper>
            <LoginButton>Login</LoginButton>
          </LinkWrapper>
          <Button>Get Started</Button>
        </NavButtonsWrapper>
      </NavWrapper>
      <SmallDeviceNavBar>
        <LogoWrapper>
          <Logo src={floxy_logo}></Logo>
        </LogoWrapper>
        <MenuIconWrapper>
          <MenuIcon
            onClick={(e) => {
              setNavOptions(!navOptions);
              e.stopPropagation();
            }}
            className="fa fa-thin fa-bars fa-2x"
          />
        </MenuIconWrapper>
        {navOptions && (
          <MobileNavOptions onClick={(e) => e.stopPropagation()}>
            <NavOptionsWrapper>
              <CloseIcon
                onClick={() => setNavOptions(false)}
                className="fa fa-sharp fa-light  fa-xmark fa-2x"
              ></CloseIcon>
              <DropDownMobile
                onClick={(e) => {
                  setShowCrypto(!showCrypto);
                  setShowDerivatives(false);
                  setShowTrade(false);
                  e.stopPropagation();
                }}
              >
                <Link>Buy Crypto </Link>
                {showCrypto ? (
                  <AngleIcon className="fa fa-thin fa-angle-up" />
                ) : (
                  <AngleIcon className="fa fa-thin fa-angle-down" />
                )}
              </DropDownMobile>
              {showCrypto && (
                <DropDownOptionsMobile>
                  <List onClick={() => setNavOptions(false)}>Fast Trade</List>
                  <List onClick={() => setNavOptions(false)}>P2P</List>
                </DropDownOptionsMobile>
              )}
              <DropDownMobile
                onClick={(e) => {
                  setShowTrade(!showTrade);
                  setShowCrypto(false);
                  setShowDerivatives(false);
                  e.stopPropagation();
                }}
              >
                <Link>Trade </Link>
                {showTrade ? (
                  <AngleIcon className="fa fa-thin fa-angle-up" />
                ) : (
                  <AngleIcon className="fa fa-thin fa-angle-down" />
                )}
              </DropDownMobile>
              {showTrade && (
                <DropDownOptionsMobile>
                  <List onClick={() => setNavOptions(false)}>Spot Trading</List>
                  <List onClick={() => setNavOptions(false)}>
                    Strategy Trading
                  </List>
                  <List onClick={() => setNavOptions(false)}>
                    Floxypay Convert
                  </List>
                </DropDownOptionsMobile>
              )}
              <DropDownMobile
                onClick={(e) => {
                  setShowDerivatives(!showDerivatives);
                  setShowCrypto(false);
                  setShowTrade(false);
                  e.stopPropagation();
                }}
              >
                <Link>Derivatives </Link>
                {showDerivatives ? (
                  <AngleIcon className="fa fa-thin fa-angle-up" />
                ) : (
                  <AngleIcon className="fa fa-thin fa-angle-down" />
                )}
              </DropDownMobile>
              {showDerivatives && (
                <DropDownOptionsMobile>
                  <List onClick={() => setNavOptions(false)}>
                    Futures Classic
                  </List>
                  <List onClick={() => setNavOptions(false)}>Futures Lite</List>
                </DropDownOptionsMobile>
              )}
              <DropDownMobile
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link onClick={() => setNavOptions(false)}>
                  Innovation Lab{" "}
                </Link>
              </DropDownMobile>
              <DropDownMobile
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link onClick={() => setNavOptions(false)}>Announcements </Link>
              </DropDownMobile>
              <DropDownMobile
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Link onClick={() => setNavOptions(false)}>Login </Link>
              </DropDownMobile>
              <Button onClick={() => setNavOptions(false)}>Get Started</Button>
            </NavOptionsWrapper>
          </MobileNavOptions>
        )}
      </SmallDeviceNavBar>
    </Root>
  );
};

export default Navbar;
