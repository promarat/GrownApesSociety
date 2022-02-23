import Web3 from "web3";
import Logo from "./assets/imgs/Logo.png";
import twitterPng from "./assets/imgs/twitter.png";
import openseaPng from "./assets/imgs/opensea.png";
import discordPng from "./assets/imgs/discord.png";

import divide0 from "./assets/imgs/divide-0.jpg"
import divide1 from "./assets/imgs/divide-1.jpg"
import divide2 from "./assets/imgs/divide-2.jpg"
import divide3 from "./assets/imgs/divide-3.jpg"
import divide4 from "./assets/imgs/divide-4.jpg"
import divide5 from "./assets/imgs/divide-5.jpg"

import doodle0 from "./assets/imgs/doodle-0.jpg"
import doodle1 from "./assets/imgs/doodle-1.jpg"
import doodle2 from "./assets/imgs/doodle-2.jpg"
import doodle3 from "./assets/imgs/doodle-3.jpg"
import doodle4 from "./assets/imgs/doodle-4.jpg"
import doodle5 from "./assets/imgs/doodle-5.jpg"
import doodle6 from "./assets/imgs/doodle-6.jpg"
import doodleKing from "./assets/imgs/doodle-king.gif"
import doodleGrown from "./assets/imgs/doodle-grown.gif"

import divideCurve from "./assets/imgs/curve.png"
import currency from "./assets/imgs/currency.png"
import balloon from "./assets/imgs/balloon.png"
import crown from "./assets/imgs/crown.png"

import './App.css';
import WOW from 'wowjs';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import { useEffect, useState } from "react";

var web3;
var nftContract;
var address;
var chainId;

function App() {
  const [quantity, setQuantity] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = async () => {
    if(window.ethereum != null) {
      const web3 = new Web3(window.ethereum);
      nftContract = null;
      await window.ethereum.request({method: 'eth_chainId'}).then(data => {
        chainId = data;
      });
      console.log(chainId);
      // if(chainId == '0x4') {
        await window.ethereum.request({method: 'eth_requestAccounts'}).then((data) => {
          address = data[0];
          setWalletAddress(address);
          console.log(address);
          var minAddr = address.substr(0,6) + "..." + address.substr(address.length - 4);
          nftContract = {"inputs":[{"internalType":"uint256","name":"chosenAmount","type":"uint256"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"};
        });
      // } else {
      //   alert('Please change the network to Rinkeby and try again...')
      // }
    } else {
      alert('Can\'t Find Metamask Wallet. Please install it and reload again to mint NFT.');
    }
  }

   useEffect(() => {
    new WOW.WOW({
      live: false
    }).init();
  }, []);

  return (
    <div className="App">
      <div className="container-fluid main-container">
          <div className="section-container section-0">
            <header className="header"> 
              <img src={Logo} className="logo" width={420} height={140}/>
              <div className="button-wrap">
                <a className="ml-20" rel="noreferrer" href="https://discord.gg/PyFgjGNtGd" target="_blank">
                  <img alt="Discord" src={discordPng} className="nav-img"/>
                </a>
                <a className="ml-20" rel="noreferrer" href="https://twitter.com/doodleapes_nft" target="_blank">
                  <img alt="Twitter" src={twitterPng} className="nav-img"/>
                </a>
                <a className="ml-20" rel="noreferrer" href="https://opensea.io/collection/doodle-apes-society-das" target="_blank">
                  <img alt="Opensea" src={openseaPng} className="nav-img"/>
                </a>
              </div>
            </header>
            <div className="container-0">
              <div className="doodle-border doodle-2">
                <img alt="doodle-0" src={doodle0} width="100%" height="100%"/>
              </div>
              <div className="doodle-border doodle-1">
                <img alt="doodle-1" src={doodle1}  width="100%" height="100%" />
              </div>
              <div className="doodle-border doodle-0">
                <img alt="doodle-2" src={doodle2} width="100%" height="100%"/>
              </div>
            </div>
          </div>

          <div className="divide-container">
            <img alt="divide" src={divide0} width="100%" height="100%"/>
          </div>

          <div className="section-container section-1">
            <div className="container-1">
              <div className="db-container">
                <h2 className="block-title">
                <span className="cblue">D</span>
                <span className="cpurple">o</span>
                <span className="cpink">o</span>
                <span className="cpurple">d</span>
                <span className="cyellow">l</span>
                <span className="cblue">e</span>
                &nbsp;
                <span className="cpink">A</span>
                <span className="cblue">p</span>
                <span className="cyellow">e</span>
                </h2>
                <p className="block-content">D.A.S is a collection of 2,500 colorful baby apes straight out of the jungle. Inspired by Doodles art and hand-drawn by Obi, these baby apes sold out in 3 mn!</p>
              </div>
              <div className="flag-img gif-container">
                <img alt="doodle-king" src={doodleKing} width="100%"/>
              </div>
            </div>
          </div>

          <div className="divide-container">
            <img alt="divide" src={divide1} width="100%" height="100%"/>
          </div>

          <div className="section-container section-2">
            <div className="container-1">
              <div className="gif-container">
                <img alt="doodle-grown" src={doodleGrown} width="100%"/>
              </div>
              <div className="young-content db-container">
                <h2 className="block-title">
                <span className="cblue">G</span>
                <span className="cpurple">r</span>
                <span className="cgreen">o</span>
                <span className="cyellow">w</span>
                <span className="cblue">n</span>
                &nbsp;
                <span className="cgreen">A</span>
                <span className="cblue">p</span>
                <span className="cpyellow">e</span>
                <span className="cgreen">s</span>
                </h2>
                <p className="block-content">Baby apes grew up to become young adults: they have jobs and responsibilities now. A collection of 5,000 grown apes ready to take over the blockchain.</p>
              </div>
            </div>
          </div>

          <div className="divide-container">
            <img alt="divide" src={divide2} width="100%" height="100%"/>
          </div>

          <div className="section-container section-3">
            <div className="container-1">
              <div className="pd-container">
                <h2 className="block-title">
                  <span className="cblue">R</span>
                  <span className="cgreen">O</span>
                  <span className="cpink">A</span>
                  <span className="cpurple">D</span>
                  <span className="cyellow">M</span>
                  <span className="cpurple">A</span>
                  <span className="clblue">P</span>
                  &nbsp;
                  <span className="cpink">1</span>
                  <span className="cpurple">.</span>
                  <span className="cyellow">0</span>
                </h2>
                <p className="block-content">Grow a quality community.<br/>First merch drop.<br/>ETH + D.A.S giveaway.<br/>D.A.S Bank.<br/>Legendary Doodle Apes.</p>
                <img alt="flag curve" src={divideCurve} className = "divide-curve0"/>
              </div>
              <div className="pd-container">
                <img alt="flag curve" src={divideCurve} className = "divide-curve1"/>
                <h2 className="block-title">
                  <span className="cgreen">R</span>
                  <span className="cpink">O</span>
                  <span className="cpurple">A</span>
                  <span className="cyellow">D</span>
                  <span className="cpurple">M</span>
                  <span className="cpink">A</span>
                  <span className="clblue">P</span>
                  &nbsp;
                  <span className="cpink">2</span>
                  <span className="cpurple">.</span>
                  <span className="cblue">0</span>

                </h2>
                <p className="block-content">New Website.<br/>Grown Apes.<br/>$DAS token launch.<br/>Game Center.</p>
              </div>
            </div>
          </div>

          <div className="divide-container">
            <img alt="divide" src={divide3} width="100%" height="100%"/>
          </div>

          <div className="section-container section-4">
            <div className="container-2">
              <img alt="currency" src={currency} className="currency"/>
              <h2 className="block-title">
                <span className="cpink">$</span>
                <span className="cpurple">D</span>
                <span className="cgreen">A</span>
                <span className="clblue">S</span>
              </h2>
              <h2 className="block-exp">Comming soon...</h2>
              <p className="block-content">We are working on the official currency of D.A.S. This token will be available to D.A.S family only. Doodle Apes will receive a gift from their grandparents (Airdrop) and Grown Apes will be able to earn their salary while working (Staking). $DAT will be used to unlock rewards, get access to exclusive launches, and much more... it will be the heart of the D.A.S ecosystem.</p>
            </div>
          </div>

          <div className="divide-container">
            <img alt="divide" src={divide4} width="100%" height="100%"/>
          </div>

          <div className="section-container section-5">
            <div className="container-2">
              <img alt="balloon" src={balloon} className="balloon"/>
              <h2 className="block-title">
              <span className="cblue">G</span>
                <span className="cgreen">a</span>
                <span className="cpink">m</span>
                <span className="cpurple">e</span>
                &nbsp;
                <span className="cyellow">C</span>
                <span className="cpurple">e</span>
                <span className="clblue">n</span>
                <span className="cpink">t</span>
                <span className="cpurple">e</span>
                <span className="cyellow">r</span>
              </h2>
              <h2 className="block-exp">Comming soon...</h2>
              <p className="block-content">You will be able to play some classic mini-games, remixed with D.A.S universe! You will access the Game Center using your D.A.S, but he must be accompanied by an adult! $DAT will be very useful there: you can play to earn different rewards: free Doodle Apes and Grown Apes, $DAT rewards, merch, etc... You can play for fun but be ready for weekly tournaments!</p>
            </div>
          </div>

          <div className="divide-container">
            <img alt="divide" src={divide5} width="100%" height="100%"/>
          </div>

          <div className="section-container section-6">
            <div className="container-4">
              <h2 className="block-title">
                <span className="cgreen">T</span>
                <span className="cblue">e</span>
                <span className="cpink">a</span>
                <span className="cpurple">m</span>
              </h2>
              <div className="container-3">
                <div className="container-member">
                  <h2 className="block-content">Nano</h2>
                  <p className="block-name">Discord Manager</p>
                  <div className="doodle-box">
                    <img alt="discord manager" src={doodle3} width="100%" height="100%"/>
                  </div>
                </div>
                <div className="container-member">
                  <h2 className="block-content">Obi</h2>
                  <p className="block-name">Founder & Artist</p>
                  <div className="doodle-box">
                    <img alt="discord manager" src={doodle4} width="100%" height="100%"/>
                  </div>
                </div>
                <div className="container-member">
                  <h2 className="block-content">Kbird</h2>
                  <p className="block-name">Marketing</p>
                  <div className="doodle-box">
                    <img alt="discord manager" src={doodle5} width="100%" height="100%"/>
                  </div>
                </div>
                <div className="container-member">
                  <h2 className="block-content">Xav</h2>
                  <p className="block-name">Technical</p>
                  <div className="doodle-box">
                    <img alt="discord manager" src={doodle6} width="100%" height="100%"/>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer">
              <img alt="crown" src={crown} className="crown"/>
              <p className="block-name">All Rights Reserved - 2022</p>
            </div>
          </div>

        </div>
    </div>
  );
}

export default App;
