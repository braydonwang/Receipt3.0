/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const PRIVATE_KEY = "d6d99bd257065f28cd81f53f1dc88db639e782dc671fc139963f1aa236ef45be";
const API_URL = "https://eth-goerli.g.alchemy.com/v2/ktt8p_PQDP2pJUzT2fQ3Yi0jn1Nc72UL";

module.exports = {
   solidity: { version:"0.8.10", settings: {optimizer: {enabled: false}}},
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      }
   },
}