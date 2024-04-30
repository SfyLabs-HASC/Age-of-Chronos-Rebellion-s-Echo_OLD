// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.21;
import "@rmrk-team/evm-contracts/contracts/implementations/premint/RMRKEquippablePreMint.sol";

contract ItemsAriaArmor is RMRKEquippablePreMint {
    // Constructor
    constructor(
        string memory collectionMetadata,
        uint256 maxSupply,
        address royaltyRecipient,
        uint16 royaltyPercentageBps
    )
        RMRKEquippablePreMint(
            "Items Aria Armor",
            "ARIAITEMARMOR",
            collectionMetadata,
            maxSupply,
            royaltyRecipient,
            royaltyPercentageBps
        )
    {}

    /*
3. inserire due asset per ogni child, il primo è l'asset principale visualizzabile,
il secondo è il thumbnail dell'immagine. aggiusta la funzione di smart contract di nestmintwithasset
 dove inserisci due asset, uno buono e l'altro thumbnail
 The ID of the asset is automatically assigned to be the next available asset ID.
 il secondo asset lo inserisci da script oppure modifichi la funzione solidity nestMintWithAssets
*/
    function addTwoItemAssets(
        uint64 slotForArmor,
        string memory assetForArmor,
        string memory secondAssetForArmor
    ) public {
        addEquippableAssetEntry(
            slotForArmor,
            address(0),
            assetForArmor,
            new uint64[](0)
        );
        addAssetEntry(
            secondAssetForArmor
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
            // Only first two assets added by token owner are auto-accepted, so we mighty need to accept for the rest of cases
            if (_pendingAssets[tokenId].length != 0) {
                _acceptAsset(tokenId, 0, assetIds[i]);
            }
        }
    }
}
