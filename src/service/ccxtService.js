// src/service/ccxtService.js
const ccxt = require('ccxt');
const Coin = require('../entity/Coin');

async function getTradableCoinsOnBinance() {
  const exchange = new ccxt.binance();
  const markets = await exchange.loadMarkets();
  const tradableCoins = Object.keys(markets);
  return tradableCoins;
}

async function getAveragePricesOfCoins() {
  const exchange = new ccxt.binance();
  const symbols = await getTradableCoinsOnBinance();
  const coins = [];

  for (const symbol of symbols) {
    const ticker = await exchange.fetchTicker(symbol);
    const averagePrice = (ticker.bid + ticker.ask) / 2;
    const coin = new Coin(symbol, averagePrice);
    coins.push(coin);
  }

  return coins;
}

module.exports = {
  getTradableCoinsOnBinance,
  getAveragePricesOfCoins,
};
