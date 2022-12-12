const { ethers } = require("ethers");
const { config } = require("dotenv");
config();

function connection(network) {
  let url;
  if (network == "polygon") url = process.env.ALCHEMY_POLYGON_HTTPS;
  if (network == "xdai") url = process.env.BLOCKSCOUT_GNOSIS_HTTPS;
  return new ethers.providers.JsonRpcProvider(url);
}

module.exports = { connection };
