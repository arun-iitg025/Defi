require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/e0xCFpJrhka1eODBXTjsCi6_EjNpQtC6',
      accounts: [ '9502d674fc922b5e7dc08c5d4bf7d2439596bd5df378b8d146b9470638648747' ],
    },
  },
};



// require('@nomiclabs/hardhat-waffle');

// module.exports = {
//   solidity: '0.8.0',
//   networks: {
//     ropsten: {
//       url: 'https://eth-ropsten.alchemyapi.io/v2/z4WpA8UKgqnwbTYmrZu15yCOiijBKaRv',
//       accounts: ['2f99db8cdb04655028eee1dc98230925202f6b3e010e43fad2883b4bea90a1a3'],
//     },
//   },
// };