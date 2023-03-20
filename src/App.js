import React, { useState } from "react";
import Footer from "./components/footer/Footer";
import MarketTrend from "./components/marketTrend/MarketTrend";
import Navbar from "./components/navbar/Navbar";
import TradeSection from "./components/tradeSection/TradeSection";
import BeginnerSection from "./components/beginnerSection/BeginnerSection";
import Bridgesection from "./components/bridgeSection/Bridgesection";
import Coin from "./components/coinSection/Coin";
import HotNft from "./components/hotNft/HotNft";
const App = () => {
  const [showCrypto, setShowCrypto] = useState(false);
  const [showTrade, setShowTrade] = useState(false);
  const [showDerivatives, setShowDerivatives] = useState(false);
  const [navOptions, setNavOptions] = useState(false);

  return (
    <div
      onClick={() => {
        setShowCrypto(false);
        setShowDerivatives(false);
        setShowTrade(false);
        setNavOptions(false);
      }}
    >
      <Navbar
        showCrypto={showCrypto}
        setShowCrypto={setShowCrypto}
        showTrade={showTrade}
        setShowTrade={setShowTrade}
        setShowDerivatives={setShowDerivatives}
        showDerivatives={showDerivatives}
        navOptions={navOptions}
        setNavOptions={setNavOptions}
      ></Navbar>
      <Bridgesection></Bridgesection>
      <Coin></Coin>

      <MarketTrend></MarketTrend>
      <HotNft></HotNft>
      <TradeSection></TradeSection>
      <BeginnerSection></BeginnerSection>
      <Footer></Footer>
    </div>
  );
};

export default App;
