// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.11;

import "@thirdweb-dev/contracts/drop/DropERC1155.sol"; // For my collection of Energy Sources
import "@thirdweb-dev/contracts/token/TokenERC20.sol"; // For the LOTUS Token
import "@thirdweb-dev/contracts/openzeppelin-presets/utils/ERC1155/ERC1155Holder.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract ArcturusSG is ReentrancyGuard, ERC1155Holder {
    
    DropERC1155 public immutable energyNftCollection;
    TokenERC20 public immutable rewardsToken;

// Constructor function to set the rewards token and the NFT collection addresses
    constructor(
        DropERC1155 energyContractAddress,
        TokenERC20 lotusContractAddress
    ) {
        energyNftCollection = energyContractAddress;
        rewardsToken = lotusContractAddress;
    }

 struct MapValue {
        bool isData;
        uint256 value;
    }

mapping(address => MapValue) public playerEnergy;

mapping(address => MapValue) public playerLastUpdate;

 function stake(uint256 _tokenId) external nonReentrant {
        // Ensure the player has at least 1 of the token they are trying to stake
        require(
           energyNftCollection.balanceOf(msg.sender, _tokenId) >= 1,
            "You must have at least 1 of the pickaxe you are trying to stake"
        );

        // If they have a pickaxe already, send it back to them.
        if (playerEnergy[msg.sender].isData) {
            // Transfer using safeTransfer
             energyNftCollection.safeTransferFrom(
                address(this),
                msg.sender,
                playerEnergy[msg.sender].value,
                1,
                "Returning your old Energy Source"
            );
        }

         uint256 reward = calculateRewards(msg.sender);
        rewardsToken.transfer(msg.sender, reward);

         energyNftCollection.safeTransferFrom(
            msg.sender,
            address(this),
            _tokenId,
            1,
            "Staking your pickaxe"
        );

        // Update the playerPickaxe mapping
        playerEnergy[msg.sender].value = _tokenId;
        playerEnergy[msg.sender].isData = true;

        // Update the playerLastUpdate mapping
        playerLastUpdate[msg.sender].isData = true;
        playerLastUpdate[msg.sender].value = block.timestamp;
    }

    function withdraw() external nonReentrant {
        // Ensure the player has a pickaxe
        require(
            playerEnergy[msg.sender].isData,
            "You do not have any Energy Sources to withdraw."
        );

        // Calculate the rewards they are owed, and pay them out.
        uint256 reward = calculateRewards(msg.sender);
        rewardsToken.transfer(msg.sender, reward);

        // Send the pickaxe back to the player
        energyNftCollection.safeTransferFrom(
            address(this),
            msg.sender,
            playerEnergy[msg.sender].value,
            1,
            "Returning your Energy Sources"
        );

         // Update the playerPickaxe mapping
       playerEnergy[msg.sender].isData = false;

        // Update the playerLastUpdate mapping
        playerLastUpdate[msg.sender].isData = true;
        playerLastUpdate[msg.sender].value = block.timestamp;
    }

    function claim() external nonReentrant {
        // Calculate the rewards they are owed, and pay them out.
        uint256 reward = calculateRewards(msg.sender);
        rewardsToken.transfer(msg.sender, reward);

        // Update the playerLastUpdate mapping
        playerLastUpdate[msg.sender].isData = true;
        playerLastUpdate[msg.sender].value = block.timestamp;
    }

     // Calculate the rewards the player is owed since last time they were paid out
    // The rewards rate is 20,000,000 per block.
    // This is calculated using block.timestamp and the playerLastUpdate.
    // If playerLastUpdate or playerPickaxe is not set, then the player has no rewards.
    function calculateRewards(address _player)
        public
        view
        returns (uint256 _rewards)
    {
        // If playerLastUpdate or playerPickaxe is not set, then the player has no rewards.
        if (
            !playerLastUpdate[_player].isData || !playerEnergy[_player].isData
        ) {
            return 0;
        }

        // Calculate the time difference between now and the last time they staked/withdrew/claimed their rewards
        uint256 timeDifference = block.timestamp -
            playerLastUpdate[_player].value;

        // Calculate the rewards they are owed
        uint256 rewards = timeDifference *
            10_000_000_000_000 *
            (playerEnergy[_player].value + 1);

        // Return the rewards
        return rewards;
    }
}