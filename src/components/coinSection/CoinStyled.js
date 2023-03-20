import styled from "styled-components";
import Banner from "../images/sec2-back.jpg";

export const Root = styled.div`
  background-image: url(${Banner});
  height: 50vh;
  /* width: 100%; */

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* background-size: 100% 100%; */
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  @media (max-width: 767px) {
    height: auto;
    padding: 30px 0;
  }
  @media (max-width: 530px) {
    height: auto;
  }
`;
export const Container = styled.div`
  margin: 0 auto;
  display: grid;
  justify-content: center;
  padding: 0 20px;
  align-items: center;
  text-align: center;
  grid-template-columns: 33% 33% 33%;
  /* width: 70%; */
  width: 1260px;
  @media (max-width: 1260px) {
    grid-gap: 15px;
    margin-left: 20px;
    padding: 0 40px;
  }
  @media (max-width: 1024px) {
    grid-gap: 20px;
    margin-left: 10px;
  }
  @media (max-width: 820px) {
    grid-gap: 20px;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    grid-template-columns: 49% 49%;
    grid-gap: 15px;
  }
  @media (max-width: 550px) {
    grid-template-columns: 100%;
    padding: 0 20px;
    margin: 0;

    /* margin: 0; */
    /* margin-right: 0; */
    /* padding: 0; */
  }
`;
export const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const ImageTextWrapper = styled.div`
  display: flex;
`;
export const Wrapper = styled.div`
  border-radius: 5px;
  opacity: 0.88;
  width: 85%;
  border-style: solid;
  border-width: 1.5px;
  border-image-source: linear-gradient(to right, #3a57b5, #9e5ae6);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #000, #000),
    linear-gradient(to top, #3a57b5, #9e5ae6);
  background-origin: border-box;
  background-clip: content-box, border-box;
  background: linear-gradient(black 0 0) padding-box,
    linear-gradient(to right, #681ace, #2851d8, #ff00ff5c, #fff) border-box;
  padding: 20px;
  @media (max-width: 790px) {
    padding: 20px 10px;
    width: 88% !important;
  }
  @media (max-width: 767px) {
    padding: 20px;
  }
  /* @media(max-width: 530px){
    width: 95%;
  } */
`;
export const ImageWrapper = styled.div``;
export const Image = styled.img``;
export const TextWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const Text = styled.text`
  padding-left: 10px;
  font-family: Lato;
  font-size: 20px;
  text-align: left;
  color: #fff;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`;

export const ButtonWrapper = styled.div``;
export const Button = styled.button`
font-family: Lato;
font-size: 11px;
font-weight: 900;
text-align: center;
color: red;
  padding: 5px 10px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to top, #3a57b5, #9e5ae6);
  border-image-slice: 1;
  background-color: #ffece8;

  ${(p) =>
    p.GreenText &&
    `
  font-family: Lato;
  font-size: 11px;
  font-weight: 900;
  text-align: center;
  color: #0a6a26;
  background-color:#e8ffea;
  `}

  :focus{
    border:none,
    outline:"none"
  }
`;
export const TextGraphWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;
export const BoldNumberWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const NumberBoldText = styled.text`
  font-family: Lato;
  font-size: 20px;
  letter-spacing: normal;
  text-align: left;
  color: #d4d4d4;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
  // color: #fff;
  // font-size: 20px;
  // font-weight: 600;
`;

export const NumberText = styled(NumberBoldText)`
  // font-weight: 500;
  padding-top: 5px;
  font-family: Lato;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
  color: #d4d4d4;
`;
