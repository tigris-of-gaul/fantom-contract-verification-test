Test verification of contracts using the `hardhat-etherscan` plugin

To install dependencies:

    npm ci

To compile:

    npm run compile

To deploy and verify contract on FTMScan:

    npm run deploy

Note: Deployment requires the following environment variables to be defined:

    FTMSCAN_API_KEY
    MNEMONIC

The following environment variables are optional and will be used if defined:

    FANTOM_RPC_URL
    GAS_PRICE_GWEI
