// src/controller/ccxtController.js
const ccxtService = require('../service/ccxtService');

async function getTradableCoinsOnBinance(req, res) {
  const tradableCoins = await ccxtService.getTradableCoinsOnBinance();
  res.json(tradableCoins);
}

async function getAveragePricesOfCoins(req, res) {
  const coins = await ccxtService.getAveragePricesOfCoins();
  res.json(coins);
}

module.exports = {
  getTradableCoinsOnBinance,
  getAveragePricesOfCoins,
};
