import styled from "styled-components";

export const TextRoot = styled.div`
  // background-color: #9f94942b;
  padding: 20px 0px;
  margin: 0 0 70px 0;
  @media (max-width: 768px) {
    width: 1440px;
    padding: 5px 0;
  }
  /* @media (max-width: 768px) {
    width: 100vw;
    
  } */
`;

export const Root = styled.div`
  margin: 0px 60px;
  @media (max-width: 768px) {
    margin: 0px 20px;
  }
`;

export const Heading = styled.div`
  font-size: 1.75rem;
  @media (max-width: 768px) {
    /* display: none; */
  }
`;

export const TextSelectField = styled.div`
  margin: 10px 0px 0px 10px;
  @media (max-width: 768px) {
    margin: 0;
  }
`;

export const Select = styled.select`
  padding: 0px 50px 0px 2px;
  border-radius: 5px;
  outline: none;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;
export const RecentlyUploaded = styled.div`
  // background: #fff;
  color: #fff;
  display: grid;
  margin-top: 20px;
  // grid-template-columns: 10.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5% 12.5%;
  grid-template-columns: 12% 13.5% 10.5% 12.5% 14.5% 11.5% 15.5% 8.5%;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  // margin: 10px 5%;
  // padding: 10px 9px

  padding: 14px 15px;
  box-shadow: 0px 0px 5px 5px #0000;
  border-radius: 5px;
  @media (max-width: 768px) {
    /* display: flex;
    justify-content: space-between; */
  }
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  font-size: 16px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 0.48px;
  text-align: center;
  color: #2a2a2a;
  padding: 8px 0;
  border-radius: 10px;
`;
export const Button = styled.div`
  // width: 60%;
  cursor: pointer;
  font-weight: 500;
  padding: 2px 0;
`;

export const RecentlyUploadedDate = styled.div`
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
export const Text = styled.div`
  margin: 12px 0;
  ${(p) =>
    p.PriceTrend &&
    `
color:#1b9538;
`}
  @media(max-width:768px) {
    /* display: none; */
  }
`;
export const RecentlyUploadedStatus = styled.div`
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
export const RecentlyUploadedButton = styled.div`
  cursor: pointer;
  border-radius: 5px;
  padding: 5px 0px;
  font-size: 14px;
  background-color: #6836ed;
  color: #fff;
  text-align: center;
  @media (max-width: 768px) {
    padding: 5px 13px;
  }
`;

export const RecentlyUploadedHeader = styled.div`
  display: grid;
  grid-template-columns: 13% 12.5% 12.5% 12.5% 12.5% 12.5% 11.5% 11.5%;
  // margin: 5px 5%;
  // padding: 14px 15px;
  align-items: center;
  text-align: center;
  border-radius: 10px;
  border-style: solid;
  color: #fff;
  border-width: 2px;
  border-image-source: linear-gradient(to top, #3a57b5, #9e5ae6);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #05061a, #05061a),
    linear-gradient(to top, #3a57b5, #9e5ae6);
  background-color: #15173f;
  background-origin: border-box;
  background-clip: content-box, border-box;
  @media (max-width: 768px) {
    /* display: none; */
  }
`;
export const HeadingText = styled.div`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
  align-items: center;
  padding: 25px 10px;
`;

export const RecentlyUploadedButtonWrapper = styled.div``;

export const DocImage = styled.img`
  width: 50px;
`;

export const SideBar = styled.div`
  background-color: black;
`;
export const TextMainWrapper = styled.div`
  display: grid;
  //   margin-bottom: 50px;

  @media (max-width: 1440px) {
    overflow: scroll;
    position: relative;
    width: 100vw;
  }
`;
export const ImageWrapper = styled.div``;
export const Image = styled.img``;
