console.log('this is loaded');

var keys = {
  twitter: {
    consumer_key: "process.env.TWITTER_CONSUMER_KEY",
    consumer_secret: "process.env.TWITTER_CONSUMER_SECRET",
    access_token_key: "process.env.TWITTER_ACCESS_TOKEN_KEY",
    access_token_secret: "process.env.TWITTER_ACCESS_TOKEN_SECRET"
  },
  spotify: {
    id: "process.env.7883301db58041be8ae2365d3ad590e5",
    secret: "process.env.73696030967840abbb1044f9ff774688"
  }
};

module.exports = {
  keys: keys
};