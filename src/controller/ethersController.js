// src/controller/ethersController.js
const ethersService = require('../service/ethersService');

async function isValidWalletAddress(req, res) {
  const { walletAddress } = req.params;
  const isValid = await ethersService.isValidWalletAddress(walletAddress);
  res.json({ isValid });
}

async function createWallet(req, res) {
  const wallet = await ethersService.createWallet();
  res.json({ walletAddress: wallet.address });
}

async function getLatest1000Transactions(req, res) {
  const transactions = await ethersService.getLatest1000Transactions();
  res.json(transactions);
}

module.exports = {
  isValidWalletAddress,
  createWallet,
  getLatest1000Transactions,
};
