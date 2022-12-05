import hre = require('hardhat');
import { ethers } from 'hardhat';

const snooze = async (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function main() {
  const gasPrice = process.env.GAS_PRICE_GWEI
    ? ethers.utils.parseUnits(process.env.GAS_PRICE_GWEI, 'gwei')
    : undefined;

  const factory = await ethers.getContractFactory('SpookyComplexRewarderHandlerV2');
  const deployedContract = await factory.deploy({
    gasPrice,
  });
  console.log('Deployed contract address: %s', deployedContract.address);
  const receipt = await deployedContract.deployTransaction.wait();
  console.log('Confirmed on block number %s', receipt.blockNumber);

  const SLEEP_DURATION_SECONDS = 10;
  console.log('Contract is deployed. Sleeping for %s seconds.', SLEEP_DURATION_SECONDS);
  await snooze(SLEEP_DURATION_SECONDS * 1000);
  console.log('Done sleeping. Will verify contract on FTMScan.');

  await hre.run('verify:verify', {
      address: deployedContract.address,
      constructorArguments: [],
  });
  console.log('Verified contract on FTM scan');
  
  console.log('Finished');
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });