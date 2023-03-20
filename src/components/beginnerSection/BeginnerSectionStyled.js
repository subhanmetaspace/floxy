import styled, { keyframes } from "styled-components";

export const Root = styled.div`
  background-color: #000;
  margin-top: -1px;
 
`;
export const Container = styled.div`
  /* width: 1440px; */
  padding: 0 25px;
  /* height: 85vh; */
  /* margin: 0 auto; */
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  @media(max-width:1440px){
    justify-content: space-around;
    
  }
  @media(max-width:767px){
display: flex;
flex-direction: column;
padding: 25px;
/* height: 100vh !important; */
  }
`;
export const LeftsideWrapper = styled.div``;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;
export const Text = styled.text`
  background-image: linear-gradient(to right, #777, #fff),
    linear-gradient(to right, #fff, #fff);
  font-family: Lato;
  font-size: 70px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: normal;
  text-align: left;
  color: #fff;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media(max-width:850px){
    font-size: 55px;
  }
  @media(max-width:425px){
    font-size: 50px;
  }
`;
export const VerticalWrapperOne = styled.div``;
export const ParagraphWrapper = styled.div``;
export const Paragraph = styled.p`
  background-image: linear-gradient(to right, #777, #fff),
    linear-gradient(to bottom, #ccc, #ccc);
  font-family: Lato;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3.18;
  letter-spacing: normal;
  text-align: left;
  color: #ccc;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  @media(max-width:850px){
    font-size: 18px;
  }
`;

export const RightWrapper = styled.div``;

export const TextBoxOne = styled.div`
  border: 1px solid #192e3d;
  width: 20vh;
  height: 18vh;
  margin: 20px 0;
  border-radius: 3px;
  background-color: #191d23;
  @media(max-width:425px){
    width:18vh
  }
`;
export const TextIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  opacity: 0.7px;
  color: #043899;
  border-radius: 5px;
  width: 50px;
  height: 50px;
  font-size: 1.8rem;
  text-align: center;
  background-color: white;
  margin: 0 auto;
`;
export const TextPara = styled.div`
  margin-top: 50px;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: center;
  font-weight: 600;
  color: #7a7979;
  cursor: pointer;
`;

export const ParaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 50%;
  left: 48%;
  transform: translate(-50%, -50%);
`;

const float = keyframes`
0%{
 transform: translateY(-200px);

}
100%{
  transform: translateY(-760px);

}
`;
export const TextDivOne = styled.div`
  bottom: 0;
  margin-top: 210px;
  animation: ${float} 12s infinite alternate-reverse ease-in-out;
`;

const floatTwo = keyframes`
0%{
 transform: translateY(-600px);

}
100%{
  transform: translateY(-40px);

}
`;

export const TextDivTwo = styled.div`
  margin-left: 20px;
  margin-bottom: 60px;
  animation: ${floatTwo} 12s infinite alternate-reverse ease-in-out;
`;
export const TextMainDiv = styled.div`
  overflow: hidden;
  display: flex;
  margin-left: 50px;
  height: 80vh;
  position: relative;
  @media (max-width: 1260px) {
    margin-left: 0px;
  }
  

  ::before {
    content: "";
    width: 100%;
    height: 175px;
    position: absolute;
    z-index: 1;
    background-image: linear-gradient(182deg, black, #000000c7, transparent);
  }
  ::after {
    content: "";
    width: 100%;
    bottom: 0;
    height: 200px;
    position: absolute;
    z-index: 1;
    background-image: linear-gradient(
      179deg,
      transparent,
      rgba(0, 0, 0, 0.78),
      black
    );
  }
`;
