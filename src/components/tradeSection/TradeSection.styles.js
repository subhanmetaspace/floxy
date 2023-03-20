import styled from "styled-components";
export const Root = styled.div`
  background-image: linear-gradient(rgb(0, 0, 0), rgb(90, 45, 212));
  padding: 100px 0;
  @media (max-width: 768px) {
    padding: 20px 30px;
    margin-top: 50px;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const TextWrapper = styled.div``;

export const HeadingText = styled.div`
  display: flex;
  /* margin-left: -75px; */
  background-image: linear-gradient(to right, #777, #fff),
    linear-gradient(to bottom, #fff, #fff);
  font-family: Lato;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    font-size: 40px;
    line-height: 1;
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    font-size: 28px;
    /* margin-left: 15px; */
    line-height: 1;
    margin: 20px 0;
  }
  @media (max-width: 425px) {
    font-size: 26px;
    margin: 10px 0;
    /* margin-left: 1px; */
    line-height: 1;
  }
`;

export const Text = styled.div`
  /* width: 400px;
  height: 60px; */
  /* margin-left: -75px; */
  background-image: linear-gradient(to top, #777, #fff),
    linear-gradient(to bottom, #ccc, #ccc);
  font-family: Lato;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #ccc;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1024px) {
    font-size: 16px;
    /* width: 350px; */
    margin: 20px 0;
  }
  @media (max-width: 768px) {
    font-size: 14px;
    /* margin-left: 15px; */
    margin: 25px 0;
  }
  @media (max-width: 425px) {
    font-size: 14px;
    /* margin-left: 5px; */
    margin: 25px 0;
  }
`;

export const LeftWrapper = styled.div`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const RightWrapper = styled.div``;

export const QRImage = styled.img`
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    margin-top: 40px;
  }
`;

export const DownloadButton = styled.div`
  cursor: pointer;
  /* background: linear-gradient(to bottom, #0a0b33, #0a0b33), 
    linear-gradient(to top, #3a57b5, #9e5ae6); */
  background: linear-gradient(#0a0b33 0 0) padding-box,
    linear-gradient(to right, #3a57b5, #9e5ae6) border-box;
  padding: 8px 10px 8px 6px;
  width: 208px;
  border-radius: 12px;
  border-style: solid;
  border-width: 2px;
  border-image-source: linear-gradient(to right, #3a57b5, #9e5ae6);
  border-image-slice: 1;
  /* margin-left: -75px; */

  @media (max-width: 768px) {
    margin: 50px 0 0 0;
  }
`;
export const ButtonInsideWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  border-radius: 10px;
  align-items: center;
`;

export const ButtonInsideText = styled.div``;
export const ButtonLargeText = styled.div`
  color: #fff;
  font-size: 16px;
`;

export const ButtonSmallText = styled.div`
  color: #fff;
  font-size: 10px;
`;

export const ButtonIcon = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid #3a57b5;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

export const ButtonTextWrapper = styled.div``;
