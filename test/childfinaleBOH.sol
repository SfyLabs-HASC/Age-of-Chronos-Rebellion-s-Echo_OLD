// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.21;

import "@rmrk-team/evm-contracts/contracts/implementations/abstract/RMRKAbstractEquippable.sol";
import "@rmrk-team/evm-contracts/contracts/implementations/utils/RMRKTokenURIPerToken.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/IERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/introspection/IERC165.sol";

contract Child is RMRKAbstractEquippable, RMRKTokenURIPerToken {
    uint256 private _pricePerMint;
    mapping(address => bool) public mintingApproval;

    // Constructor
    constructor(
        string memory collectionMetadata,
        uint256 maxSupply,
        address royaltyRecipient,
        uint16 royaltyPercentageBps,
        uint256 pricePerMint_
    )
        RMRKImplementationBase(
            "Child",
            "CHI",
            collectionMetadata,
            maxSupply,
            royaltyRecipient,
            royaltyPercentageBps
        )
    {
        _pricePerMint = pricePerMint_;
    }

    // Grant or revoke permission to mint
    function setMintingApproval(address user, bool approval) public onlyOwnerOrContributor {
        mintingApproval[user] = approval;
    }

    // Modified mint function with approval check, automatic revocation, and tokenURI
    function mint(
        address to,
        uint256 numToMint,
        string memory tokenURI
    ) public payable returns (uint256) {
        require(mintingApproval[msg.sender], "User not authorized to mint");

        (uint256 nextToken, uint256 totalSupplyOffset) = _prepareMint(numToMint);
        _chargeMints(numToMint);

        for (uint256 i = nextToken; i < totalSupplyOffset; ) {
            _safeMint(to, i, tokenURI);
            unchecked {
                ++i;
            }
        }

        // Revoke minting permission after successful mint
        mintingApproval[msg.sender] = false;

        return nextToken;
    }

    // Override _safeMint to include tokenURI handling
    function _safeMint(address to, uint256 tokenId, string memory tokenURI) internal override {
        super._safeMint(to, tokenId);
        _setTokenURI(tokenId, tokenURI); // Assuming this is implemented in RMRKTokenURIPerToken
    }

    // Existing methods...
}
