// app.js
const express = require('express');
const ethersController = require('./src/controller/ethersController');
const ccxtController = require('./src/controller/ccxtController');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ethers.js API


app.get('/api/ethers/isValidWalletAddress/:walletAddress', ethersController.isValidWalletAddress);


app.post('/api/ethers/createWallet', ethersController.createWallet);


app.get('/api/ethers/getLatest1000Transactions', ethersController.getLatest1000Transactions);

// CCXT API




app.get('/api/ccxt/getTradableCoinsOnBinance', ccxtController.getTradableCoinsOnBinance);


app.get('/api/ccxt/getAveragePricesOfCoins', ccxtController.getAveragePricesOfCoins);

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`API server listening on port ${port}`);
});
