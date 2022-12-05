// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0;

interface IRewarderHandler {
    function getRewardTokenInfo(address _rewarder, address _vaultToken)
        external
        view
        returns (
            address[] memory rewardTokens,
            uint256[] memory pendingAmounts,
            uint256[] memory rewardRates
        );
}
