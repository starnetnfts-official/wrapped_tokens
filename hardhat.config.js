require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("hardhat-gas-reporter");
require("@nomiclabs/hardhat-web3");
require("@nomiclabs/hardhat-etherscan");

module.exports = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 800,
      },
    },
  },
  networks: {
    hardhat: {
      chainId: 127001,
      accounts: {
        mnemonic: "test test test test test test test test test test test junk",
      },
      blockGasLimit: 199022552,
      gas: 1500000,
      gasPrice: 100,
      allowUnlimitedContractSize: false,
      throwOnTransactionFailures: false,
      throwOnCallFailures: true,
    },
    ganache: {
      url: "http://127.0.0.1:7545",
      blockGasLimit: 10000000,
    },
    mainnet: {
      url: process.env.MAINNET_RPC,
      gas: 4500000,
      gasPrice: 18000000000, //18 gwei
      timeout: 99000,
      accounts: [process.env.PRIVATE_KEY],
    },
    rinkeby: {
      url: process.env.RINKEBY_RPC,
      network_id: 4,
      gas: 1500000,
      gasPrice: 10000000000, //10 gwei
      timeout: 15000,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon: {
      url: process.env.MATIC_RPC,
      network_id: 137,
      gas: 5500000,
      gasPrice: 30000000000, //30 gwei
      timeout: 25000,
      accounts: [process.env.PRIVATE_KEY],
    },
    goerli: {
      url: process.env.GOERLI_RPC,
      network_id: 5,
      timeout: 25000,
      accounts: [process.env.PRIVATE_KEY],
    },
    polygon_test: {
      url: process.env.MATIC_RPC_TEST,
      network_id: 80001,
      gas: 2500000,
      gasPrice: 2000000000, //2 gwei
      timeout: 25000,
      accounts: [process.env.PRIVATE_KEY],
    },
    starnet: {
      url: "https://rpc1.starnetnft.com",
      gas: 4500000,
      gasPrice: 1000000000, //1 gwei
      timeout: 99000,
      accounts: [process.env.PRIVATE_KEY],
    },
    starnet_testnet: {
      url: "https://rpc-testnet.starnetnft.com",
      gas: 4500000,
      gasPrice: 1000000000, //1 gwei
      timeout: 99000,
      accounts: [process.env.PRIVATE_KEY],
    },
  },

  gasReporter: {
    enabled: !!process.env.REPORT_GAS === true,
    currency: "USD",
    gasPrice: 100,
    showTimeSpent: true,
    coinmarketcap: process.env.COINMARKETCAP_API,
  },
  mocha: {
    timeout: 25000,
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,
  },
};
