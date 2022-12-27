





const API_URL = "https://eth-goerli.g.alchemy.com/v2/ktt8p_PQDP2pJUzT2fQ3Yi0jn1Nc72UL";
const PRIVATE_KEY = "d6d99bd257065f28cd81f53f1dc88db639e782dc671fc139963f1aa236ef45be";
const PUBLIC_KEY = "0x1f06D04F47e3e129c3AA4d856578e133B1674a95";

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(API_URL);

//step 2: Define our contract ABI (Application Binary Interface) & adresses
const contract = require("./artifacts/contracts/Receipt2.sol/Receipt2.json");
const contractAddress = "0xC1d207300749e3907Aa33CE1E36bd0E0BAdd05Df";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

//step 3: Define the minting function
async function mintNFT() {
  const nonce = await web3.eth.getTransactionCount(PUBLIC_KEY, 'latest'); //get latest nonce

  //the transaction
  const tx = {
    'from': PUBLIC_KEY,
    'to': contractAddress,
    'nonce': nonce,
    'gas': 500000,
    'maxPriorityFeePerGas': 1999999987,
    'data': nftContract.methods.createReceipt("QWEIOJQWEO", "QWEIOASMLDK").encodeABI()
  };

  //step 4: Sign the transaction
  const signedTx = await web3.eth.accounts.signTransaction(tx, PRIVATE_KEY);
  const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction);
  
  console.log(`Transaction receipt: ${JSON.stringify(transactionReceipt)}`);
}

module.exports = mintNFT;

//step 5: Call the mintNFT function
// mintNFT("https://gateway.pinata.cloud/ipfs/Qmeou5f7ttU98n96mYWfYzKHV7pfRe5rcZBhYznHZCUV7M");
