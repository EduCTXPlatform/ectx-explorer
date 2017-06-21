'use strict';

var config = {};
config.ark = {};
config.freegeoip = {};
config.redis = {};
config.proposals = {};
config.exchangeRates = {exchanges: { ARK: {}, BTC: {}}};
config.marketWatcher = {exchanges: {}, candles: { poloniex: {} }, orders: {}};

module.exports = config;
