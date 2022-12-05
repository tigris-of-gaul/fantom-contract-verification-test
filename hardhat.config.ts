import { HardhatUserConfig } from "hardhat/types";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";

const getAccounts = () => {
  if (process.env.MNEMONIC) {
    return {
      mnemonic: process.env.MNEMONIC,
    };
  }
  return undefined;
};

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: "0.8.4",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    ],
  },
  defaultNetwork: "hardhat",
  networks: {
    fantom: {
      chainId: 250,
      accounts: getAccounts(),
      url: process.env.FANTOM_RPC_URL || "https://rpc.ftm.tools",
    }
  },
  etherscan: {
    apiKey: process.env.FTMSCAN_API_KEY,
  }
};

export default config;
