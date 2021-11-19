const { emojis } = require("./config")

module.exports = () => {
  return emojis[Math.floor(Math.random() * emojis.length)];
};
