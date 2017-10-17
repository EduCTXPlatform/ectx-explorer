'use strict';

var config = {};
config.ark = {};
config.freegeoip = {};
config.redis = {};
config.proposals = {};
config.exchangeRates = {exchanges: { ECTX: {}, BTC: {}}};
config.marketWatcher = {exchanges: {}, candles: {}, orders: {}};

module.exports = config;
