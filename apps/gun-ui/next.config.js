// require("gun/gun");
// require("gun/sea");
module.exports = {
  webpack: function (config, options) {
    config.module.noParse = /gun\.js$|sea\.js$/;
    return config;
  },
};
