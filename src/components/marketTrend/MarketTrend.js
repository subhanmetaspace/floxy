import React, { useState } from "react";
import styled from "styled-components";
import BTC from "./BTC";
import ETH from "./ETH";
import USDT from "./USDT";

const Root = styled.div`
  width: 1440px;
  margin: 30px auto;
  @media (max-width: 1440px) {
    width: 100vw;
  }
`;
const Container = styled.div``;
const TextWrapper = styled.div`
  @media (max-width: 768px) {
    padding: 0 0 0 20px;
  }
`;
const Text = styled.text`
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
  @media (max-width: 768px) {
    font-size: 40px;
  }
`;
const Button = styled.button`
  align-items: center;
  text-align: center;
  // opacity: 0.5;
  border-radius: 10px;
  border-style: solid;
  border-width: 2px;
  border-image-source: linear-gradient(to top, #3a57b5, #9e5ae6);
  border-image-slice: 1;
  background-image: linear-gradient(to bottom, #05061a, #05061a),
    linear-gradient(to top, #3a57b5, #9e5ae6);
  background-origin: border-box;
  background-clip: content-box, border-box;

  // border-image-source: linear-gradient(to top,#3a57b5,#9e5ae6);
  // border-image-slice: 1;
  // background-image: linear-gradient(to bottom,#05061a,#05061a),linear-gradient(to top,#3a57b5,#9e5ae6);
  // background: linear-gradient(to top, rgb(58, 87, 181), rgb(158, 90, 230));
  font-size: 18px;
  padding: 14px 38px;
  // background-color:linear-gradient(to bottom, #3a57b5, #9e5ae6);
  // background-image: linear-gradient(to bottom, #0a0b33, #0a0b33), linear-gradient(to top, linear-gradient(to bottom, #3a57b5, #9e5ae6), #9e5ae6);
  // background-origin: border-box;
  // background-clip: content-box, border-box;
  color: #fff;
  // border-radius: 10px;
  border: none;
  margin: 0 20px 0 0;
  cursor: pointer;
  // background-image: linear-gradient(to bottom, #0a0b33, #0a0b33), linear-gradient(to top, linear-gradient(to top, #3a57b5, #9e5ae6), #9e5ae6);
  @media (max-width: 768px) {
    margin: 0 0 10px 20px;
  }
`;
const ButtonWrapper = styled.div`
  margin-top: 60px;
  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;
const MarketTrend = () => {
  const [component, setCompotent] = useState(<USDT />);
  const [selected, setSelected] = useState(0);
  const [color, setColor] = useState(["#fff", "#111342", "#111342"]);
  const [textcolor, setTextColor] = useState(["#000", "#fff", "#fff"]);
  function clickHandler(event) {
    if (event === "USDT") {
      setCompotent(<USDT />);
      setSelected(0);
      setColor(["#fff", "#111342", "#111342"]);
      setTextColor(["#000", "#fff", "#fff"]);
    } else if (event === "BTC") {
      setCompotent(<BTC />);
      setSelected(1);
      setColor(["#111342", "#fff", "#111342"]);
      setTextColor(["#fff", "#000", "#fff"]);
    } else {
      setCompotent(<ETH />);
      setSelected(2);
      setColor(["#111342", "#111342", "#fff"]);
      setTextColor(["#fff", "#fff", "#000"]);
    }
  }

  return (
    <div style={{ backgroundColor: "black" }}>
      <Root>
        <Container>
          <div>
            <TextWrapper>
              <Text>Market Trend </Text>
            </TextWrapper>

            <ButtonWrapper>
              <Button
                onClick={() => clickHandler("USDT")}
                style={{
                  background: color[0],
                  color: textcolor[0],
                  border: "1px solid #675ae6",
                }}
              >
                USDT
              </Button>
              <Button
                onClick={() => clickHandler("BTC")}
                style={{
                  background: color[1],
                  color: textcolor[1],
                  border: "1px solid #675ae6",
                }}
              >
                BTC
              </Button>
              <Button
                onClick={() => clickHandler("ETH")}
                style={{
                  background: color[2],
                  color: textcolor[2],
                  border: "1px solid #675ae6",
                }}
              >
                ETH
              </Button>
            </ButtonWrapper>

            <div>{component}</div>
          </div>
        </Container>
      </Root>
    </div>
  );
};

export default MarketTrend;
