import styled, { keyframes } from "styled-components";

export const MainWrapper = styled.div`
    background-color: #000000;
    height: 100%;
    padding-bottom: 60px; 
    background-color: #141619;
`;
export const TextWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin:50px 0 60px 0;
    gap: 80px;
`;
export const TextPayment = styled.div`
  width: 210px;
  height: 70px;
  padding: 364px 130px 50px 30px;
  background-color: #181818;
  border-radius: 10px;
  border: 1px solid #3a57b55c;
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #181818, #000, #3c15a7, #9173e0), linear-gradient(to top, #181818, #181818), linear-gradient(to top, #3a57b5, #9e5ae6);
  background-origin: border-box;
  @media(max-width:500px){
    width: 175px;
  }

`;
export const TextWallet = styled.div`
  width: 210px;
  height: 70px;
  // margin-top: 50px;
  padding: 364px 134px 50px 30px;
  border-radius: 10px;
  border: 1px solid #3a57b55c;
  /* border-style: solid;
  border-width: 1px; */
  /* border-image-source: linear-gradient(to top, #3a57b5, #9e5ae6); */
  border-image-slice: 1;
  background-image: linear-gradient(to top, #000, #000, #3c15a7, #9173e0), linear-gradient(to bottom, #181818, #181818), linear-gradient(to top, #3a57b5, #9e5ae6);
  background-origin: border-box;
  /* background-clip: content-box, content-box, border-box; */
  position: relative;
  @media(max-width:500px){
    width: 175px;
  }
`;
export const TextTravel = styled.div`
  width: 210px;
  height: 70px;
  padding: 350px 130px 50px 30px;
  border-radius: 10px;
  border: 1px solid #3a57b55c;
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #000, #000, #3c15a7, #9173e0), linear-gradient(to top, #181818, #181818), linear-gradient(to top, #3a57b5, #9e5ae6);
  background-origin: border-box;
  @media(max-width:500px){
    width: 175px;
  }
`;
export const Heading = styled.text`
    margin-top:20px;
    background-image: linear-gradient(to right, #777, #fff), linear-gradient(to bottom, #fff, #fff);
    font-family: Lato;
    font-size: 70px;
    line-height: 1;
    color: #fff;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
`;
export const TextParagraph = styled.div`
  background-image: linear-gradient(to right, #777, #fff), linear-gradient(to left, #5a5a5a, #5a5a5a);
  font-family: Lato;
  font-size: 24px;
  font-weight: bold;
  color: #5a5a5a;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const TextHeading = styled.div`
  width: 221px;
  height: 120px;
  background-image: linear-gradient(to right, #777, #fff), linear-gradient(to left, #5a5a5a, #5a5a5a);
  font-family: Lato;
  font-size: 38px;
  font-weight: bold;
  color: #5a5a5a;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;
export const Text = styled.div`
   margin-top: -70px;
   
`;
export const TextHeadingCrypto = styled.div`
  width: 323px;
  height: 101px;
  background-image: linear-gradient(to right, #777, #fff), linear-gradient(to left, #5a5a5a, #5a5a5a);
  font-family: Lato;
  font-size: 38px;
  font-weight: bold;
  color: #5a5a5a;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const TextHeadingTravel = styled.div`
  width: 210px;
  background-image: linear-gradient(to right, #777, #fff), linear-gradient(to left, #5a5a5a, #5a5a5a);
  font-family: Lato;
  font-size: 38px;
  font-weight: bold;
  line-height: 1.65;
  color: #5a5a5a;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-top: -100px;
`;
export const HandImage = styled.img`
    width: 310px;
    height: 259px;
    margin-top: -243px;
    margin-left: 30px;
    @media(max-width:500px){
      margin-left: -2px;
    }
`;
// const Handanimation = keyframes`

// 0%{
//   transform: translateX(0);
// }
// 100%{
//   transform: translateX(-30px);
// }
// `;


export const TextHandImage = styled.div`
  margin-bottom: 30px;
`;
export const ScannerImage = styled.img`
  width: 262px;
  height: 250px;
  margin-top: -243px;
  margin-left: 25px;
  border-radius: 10px;
`;
export const TextScanImage = styled.div`
  margin-bottom: 30px;
`;
export const BallonImage = styled.img`
width: 414px;
    position: absolute;
    margin-top: -334px;
    margin-left: 4rem;
    @media(max-width: 1250px){
width: 320px;
    }
`;

const Ballonanimation = keyframes`
0%{
  transform: translateY(0);
}
100%{
  transform: translateY(-30px);
}
`;
export const TextBallon = styled.div`
  margin-bottom: 30px;
  animation : ${Ballonanimation} 8s infinite alternate-reverse ease-in-out; 
`;
export const Button = styled.button`
  width: 118px;
  height: 43px;
  margin: 20px 0px 0px 160px;
  border-radius: 21.5px;
  background-color: #fff;
  border: none;
  font-family: Lato;
  font-size: 16px;
  font-weight: bold;
  color: #232222;
`;
export const TextWeb = styled.div`
  color: #fff;
  width: 150px;
  height: 35px;
  border-radius: 10px;
  border-style: solid;
  border-width: 1px;
  border-image-source: linear-gradient(to bottom, #3a57b5, #9e5ae6);
  border-image-slice: 1;
  background-image: linear-gradient(to left, #19243afa,#07193a), linear-gradient(to right, #181818, #181818), linear-gradient(to top, #3a57b5, #9e5ae6);
  background-origin: border-box;
  background-clip: content-box, content-box, border-box;
  position: absolute;
  top: -20px;
  right: 20px;
`;
export const CircleIcon = styled.span`
   color: cyan;
   font-size: 20px;
   position: absolute;
   top: 6px;
   left: 25px;
`;
export const TextWebHeading = styled.span`
 font-family: Lato;
 position: absolute;
 top: 7px;
 left: 60px;
`;