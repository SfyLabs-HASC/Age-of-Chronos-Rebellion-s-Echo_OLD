// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.21;
import "@rmrk-team/evm-contracts/contracts/implementations/premint/RMRKEquippablePreMint.sol";

contract ItemsThaddeusLeftHand is RMRKEquippablePreMint {
    // Constructor
    constructor(
        string memory collectionMetadata,
        uint256 maxSupply,
        address royaltyRecipient,
        uint16 royaltyPercentageBps
    )
        RMRKEquippablePreMint(
            "Thaddeus Items Left Hand",
            "THADDEUSITEMLH",
            collectionMetadata,
            maxSupply,
            royaltyRecipient,
            royaltyPercentageBps
        )
    {}

    function addTwoItemAssets(
        uint64 slotForLeftHand,
        string memory assetForLeftHand,
        string memory secondAssetForLeftHand
    ) public {
        addEquippableAssetEntry(
            slotForLeftHand,
            address(0),
            assetForLeftHand,
            new uint64[](0)
        );
        addEquippableAssetEntry(
            slotForLeftHand,
            address(0),
            secondAssetForLeftHand,
            new uint64[](0)
        );
    }

    function nestMintWithAssets(
        address to,
        uint256 destinationId,
        string memory tokenURI,
        uint64[] memory assetIds
    ) public virtual onlyOwnerOrContributor returns (uint256) {
        uint256 tokenId = nestMint(to, 1, destinationId, tokenURI);
        uint256 length = assetIds.length;
        for (uint256 i = 0; i < length; i++) {
            addAssetToToken(tokenId, assetIds[i], 0);
            // Only first asset or assets added by token owner are auto-accepted, so we mighty need to accept for the rest of cases
            if (_pendingAssets[tokenId].length != 0) {
                _acceptAsset(tokenId, 0, assetIds[i]);
            }
        }
    }
}
