// src/service/ethersService.js
const ethers = require('ethers');
const Transaction = require('../entity/Transaction');

const provider = new ethers.providers.JsonRpcProvider('https://mainnet.infura.io/v3/7c7ce9465ef8416cbb810d95b41374c7');

async function isValidWalletAddress(walletAddress) {
  try {
    await provider.resolveName(walletAddress);
    return true;
  } catch (error) {
    return false;
  }
}

async function createWallet() {
  const wallet = ethers.Wallet.createRandom();
  return wallet;
}

async function getLatest1000Transactions() {
  const transactions = [];
  const blockNumber = await provider.getBlockNumber();

  for (let i = 0; i < 1000; i++) {
    const block = await provider.getBlock(blockNumber - i);
    for (const txHash of block.transactions) {
      const tx = await provider.getTransaction(txHash);
      const transaction = new Transaction(tx.hash, tx.from, tx.to, tx.value.toString(), tx.blockNumber);
      transactions.push(transaction);
    }
  }

  return transactions.sort((a, b) => b.amount - a.amount);
}

module.exports = {
  isValidWalletAddress,
  createWallet,
  getLatest1000Transactions,
};
