import styled from "styled-components";

export const Root = styled.div`
  background-color: #000000;
`;

export const DropDownWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const DropDownIcon = styled.div``;

export const NavButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  height: 47px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Logo = styled.img``;

export const LogoWrapper = styled.div`
  padding: 0 20px 0 0;
`;

export const DropDown = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;

export const Link = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

export const Button = styled.button`
  /* border: none;
  border-radius: 20px;
  background-color: #fff;
  text-shadow: 1px 1px #dbdbdb;
  padding: 9px 12px;
  cursor: pointer;
  font-weight: 500;
  margin: 0 15px;
  font-size: 14px; */
  transition: 0.7s;
  width: 140px;
  padding: 14px 0px;
  border-radius: 25px;
  background-color: #fff;
  font-family: Lato;
  font-size: 16px;
  cursor: pointer;
  font-weight: bold;
  color: #232222;
  border: none;
  text-align: center;
  color: #232222;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    color: rgb(255 255 255);
    background-color: #111342;
    border: 1px solid #675ae696;
  }
  @media (max-width: 768px) {
    border: none;
    border-radius: 50px;
    background-color: rgb(255, 255, 255);
    padding: 15px 40px;
    cursor: pointer;
    font-weight: 500;
    font-size: 20px;
    margin: 10px 0;
  }
  @media (max-width: 890px) {
    /* padding: 7px 12px; */
  }
`;

export const AngleIcon = styled.i`
  color: #fff;
  padding: 5px 0 0 5px;
`;

export const LinkWrapper = styled.div`
  padding: 0 10px;
`;

export const LoginButton = styled.div`
  color: #fff;
  font-weight: 500;
  cursor: pointer;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;

export const DropDownOptions = styled.div`
  position: absolute;
  z-index: 1;
  top: 40px;
  left: -60px;
  width: 250px;
  background-color: #fff;
  box-shadow: 0px 0px 13px 2px rgb(0 0 0 / 5%);
  /* border-radius: 4px; */
  @media (max-width: 767px) {
    position: relative;
    left: 0px;
    background: none;
    box-shadow: none;
    top: 0px;
    width: 100%;
    cursor: pointer;
  }
`;

export const List = styled.div`
  font-family: Lato;
  font-size: 15px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #000;
  text-shadow: none;
  height: 10px;
  display: flex;
  align-items: center;
  padding: 20px;
  @media (max-width: 767px) {
    color: white;
    font-weight: 400;
    font-size: 20px;
  }
  :hover {
    background-color: #9e5ae6;
    color: white;
    /* border-radius: 4px; */
    @media (max-width: 767px) {
      box-shadow: none;
    }
    @media (max-width: 767px) {
    }
  }
`;

export const SmallDeviceNavBar = styled.div`
  display: none;
  @media (max-width: 768px) {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 30px;
    height: 47px;
  }
`;

export const MenuIconWrapper = styled.div``;
export const MenuIcon = styled.i`
  color: #fff;
  padding: 5px 0 0 5px;
`;

export const MobileNavOptions = styled.div`
  @media (max-width: 768px) {
    transform: ${(props) => (props.show ? "scaleX(1)" : "scaleX(0)")};
    transform-origin: right;
    transition: 0.5s;
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    width: 85vw;
    background-color: #333;
    z-index: 1;
  }
`;

export const CloseIcon = styled.i`
  @media (max-width: 768px) {
    color: #fff;
  }
`;

export const NavOptionsWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 30px;
  }
`;

export const DropDownMobile = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 768px) {
    padding: 10px 0px;
  }
`;

export const DropDownOptionsMobile = styled.div``;

export const LinkMobile = styled.div``;
