// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.21;
import "@rmrk-team/evm-contracts/contracts/implementations/premint/RMRKEquippablePreMint.sol";

contract TimeSquadLuna is RMRKEquippablePreMint {
    // Variables
    mapping(address => bool) private _autoAcceptCollection;
    
    //constructor
    constructor(
          string memory collectionMetadata,
          uint256 maxSupply,
          address royaltyRecipient,
          uint16 royaltyPercentageBps
      )
          RMRKEquippablePreMint(
              "TimeSquadLuna",
              "SQUADLUNA",
              collectionMetadata,
              maxSupply,
              royaltyRecipient,
              royaltyPercentageBps
          )
      {}


     
      
    function mintWithEquippableAsset(
        address to,
        string memory tokenURI,
        uint64 equippableGroupId,
        address catalogAddress,
        string memory metadataURI,
        uint64[] memory partIds
    ) public onlyOwnerOrContributor payable {
        uint256 tokenId = mint(to, 1, tokenURI);
        uint256 assetId = addEquippableAssetEntry(equippableGroupId, catalogAddress, metadataURI, partIds);
        addAssetToToken(tokenId, uint64(assetId), 0);
    }

    // Methods
    function setAutoAcceptCollection(
        address collection,
        bool autoAccept
    ) public virtual onlyOwner {
        _autoAcceptCollection[collection] = autoAccept;
    }

    function _afterAddChild(
        uint256 tokenId,
        address childAddress,
        uint256 childId,
        bytes memory
    ) internal override {
        // Auto accept children if they are from known collections
        if (_autoAcceptCollection[childAddress]) {
            _acceptChild(
                tokenId,
                _pendingChildren[tokenId].length - 1,
                childAddress,
                childId
            );
        }
    }

} 
  