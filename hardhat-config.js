require("@nomiclabs/hardhat-etherscan")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-waffle")
require("hardhat-contract-sizer")
require("hardhat-deploy")
require("dotenv").config()
require("solidity-coverage")

const SEPOLIA_RPC_URL = process.env.SEPOLIA_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY
const REPORT_GAS = process.env.REPORT_GAS
 
module.exports = {
  defaultNetworks: "hardhat",
    networks: {
      hardhat: {
        chainI: 31337,
      },
      localhost: {
        chainId: 31337,
      },
      sepolia: {
        url: SEPOLIA_RPC_URL,
        accounts: [PRIVATE_KEY],
        chainId: 11155111,
        blockConfirmations: 6,
      }
    },
    etherscan: {
      apiKey: {
        sepolia: ETHERSCAN_API_KEY,
    },
  },
  gasReporter: {
    enabled: REPORT_GAS,
    currency: "USD",
    output: "gas-report.txt",
    noColors: true,
  },
  namedAccounts: {
    deployer: {
      default: 0, 
      1: 0, 
    user1: {
      default: 1,
    },
  },
  
  solidity: {
    compilers: [
      {
        version: "0.8.0",
      },
      {
        version: "0.4.24",
      },
    ],
  },
  mocha: {
    timeout: 200000
  },
},
}
