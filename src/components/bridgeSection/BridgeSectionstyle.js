import styled from "styled-components";

export const Root = styled.div`
  background-image: linear-gradient(#000 43%, #5a2dd4 108%);
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
export const Container = styled.div`
  width: 1440px;
  /* width: 100%; */
  padding: 0 20px;
  height: 90vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    height: auto;
    padding: 30px 0;
  }
`;

export const LeftSideContainer = styled.div``;
export const Wrapper = styled.div``;
export const RightSideContainer = styled.div``;
export const LearnMoreWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-bottom: 20px;
  width: 68%;
  padding: 5px 10px 5px 20px;
  color: white;
  border: 1px solid transparent;
  border-radius: 20px;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  background: linear-gradient(black 0 0) padding-box,
    linear-gradient(to right, #681ace, #2851d8, #ff00ff5c, #fff) border-box;
  @media (max-width: 1260px) {
    width: 90%;
  }
`;
export const LearnMore = styled.div`
  @media (max-width: 440px) {
    font-size: 16px;
    font-weight: 400;
  }
`;
export const ImageWrapper = styled.div`
  margin-top: 12rem;
  @media (max-width: 767px) {
    margin-top: 0;
  }
`;
export const Image = styled.img`
  width: 80vh;
  margin-bottom: 5rem;
  @media (max-width: 1260px) {
    width: 65vh;
  }
  @media (max-width: 1024px) {
    width: 55vh;
  }
  @media (max-width: 930px) {
    width: 45vh;
  }
  @media (max-width: 768px) {
    width: 65vh;
    margin-bottom: 0;
  }
  @media (max-width: 570px) {
    width: 55vh;
    margin-right: 15px;
  }
  @media (max-width: 580px) {
    width: 40vh;
  }
`;
export const Span = styled.span`
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-left: 10px;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
export const Text = styled.text`
  background-image: linear-gradient(to right, #777, #fff),
    linear-gradient(to bottom, #fff, #fff);

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
  @media (max-width: 1260px) {
    font-size: 55px;
  }
  @media (max-width: 930px) {
    font-size: 45px;
  }
  @media (max-width: 767px) {
    font-size: 50px;
  }
  @media (max-width: 440px) {
    font-size: 50px;
  }
`;
export const Paragraph = styled.p`
  background-image: linear-gradient(to right, #777, #fff),
    linear-gradient(to bottom, #ccc, #ccc);
  font-family: Lato;
  font-size: 22px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  color: #ccc;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
  @media (max-width: 1260px) {
    font-size: 19px;
  }
  @media (max-width: 930px) {
    font-size: 17px;
  }
`;
export const ParagraphnWrapper = styled.div``;
export const GetInTouchWrapper = styled(ParagraphnWrapper)``;
export const GetInTouch = styled.p`
  padding: 15px 35px;
  font-family: Lato;
  font-size: 17px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: normal;
  text-align: center;
  color: #fff;
  @media (max-width: 930px) {
    font-size: 15px;
  }
`;
export const InnerButtonCOntainer = styled.div`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
`;
export const ButtonWrapper = styled.div``;
export const Button = styled.button`
  width: 140px;
  padding: 14px 0px;
  border-radius: 25px;
  background-color: #fff;
  font-family: Lato;
  font-size: 16px;
  cursor: pointer;
  transition: 0.7s;
  font-weight: bold;
  color: #232222;
  border: none;
  text-align: center;
  color: #232222;
  border: 1px solid transparent;
  :focus {
    border: none;
    outline: none;
  }
  :hover {
    color: rgb(255 255 255);
    background-color: #111342;
    border: 1px solid #675ae696;
  }
  @media (max-width: 930px) {
    padding: 13px 30px;
  }
`;
