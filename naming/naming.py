# Script Python per generare i 15 file Solidity con i parametri richiesti

contract_template = '''
// SPDX-License-Identifier: Apache-2.0

pragma solidity ^0.8.21;
import "@rmrk-team/evm-contracts/contracts/implementations/premint/RMRKEquippablePreMint.sol";

contract {contract_name} is RMRKEquippablePreMint {{
    // Constructor
    constructor(
        string memory collectionMetadata,
        uint256 maxSupply,
        address royaltyRecipient,
        uint16 royaltyPercentageBps
    )
        RMRKEquippablePreMint(
            "{display_name}",
            "{symbol}",
            collectionMetadata,
            maxSupply,
            royaltyRecipient,
            royaltyPercentageBps
        )
    {{}}

    function nestMintWithAssets(
        address to,
        uint256 destinationId,
        string memory tokenURI,
        uint64[] memory assetIds
    ) public virtual onlyOwnerOrContributor returns (uint256) {{
        uint256 tokenId = nestMint(to, 1, destinationId, tokenURI);
        uint256 length = assetIds.length;
        for (uint256 i = 0; i < length; i++) {{
            addAssetToToken(tokenId, assetIds[i], 0);
            // Only first asset or assets added by token owner are auto-accepted, so we mighty need to accept for the rest of cases
            if (_pendingAssets[tokenId].length != 0) {{
                _acceptAsset(tokenId, 0, assetIds[i]);
            }}
        }}
    }}
}}
'''

# Lista dei parametri per generare i file
parameters = [
    ("itemsRykerLeftHand", "Ryker Items Left Hand", "RYKERITEMLH"),
    ("itemsRykerRightHand", "Items Ryker Right Hand", "RYKERITEMRH"),
    ("itemsRykerCap", "Items Ryker Cap", "RYKERITEMCAP"),
    ("itemsRykerArmor", "Items Ryker Armor", "RYKERITEMARMOR"),
    ("itemsAriaLeftHand", "Aria Items Left Hand", "ARIAITEMLH"),
    ("itemsAriaRightHand", "Items Aria Right Hand", "ARIAITEMRH"),
    ("itemsAriaCap", "Items Aria Cap", "ARIAITEMCAP"),
    ("itemsAriaArmor", "Items Aria Armor", "ARIAITEMARMOR"),
    ("itemsThaddeusLeftHand", "Thaddeus Items Left Hand", "THADDEUSITEMLH"),
    ("itemsThaddeusRightHand", "Items Thaddeus Right Hand", "THADDEUSITEMRH"),
    ("itemsThaddeusCap", "Items Thaddeus Cap", "THADDEUSITEMCAP"),
    ("itemsThaddeusArmor", "Items Thaddeus Armor", "THADDEUSITEMARMOR"),
    ("itemsLunaLeftHand", "Luna Items Left Hand", "LUNAITEMLH"),
    ("itemsLunaRightHand", "Items Luna Right Hand", "LUNAITEMRH"),
    ("itemsLunaCap", "Items Luna Cap", "LUNAITEMCAP"),
    ("itemsLunaArmor", "Items Luna Armor", "LUNAITEMARMOR")
]


# Creazione dei file Solidity
file_paths = []
for contract_name, display_name, symbol in parameters:
    contract_content = contract_template.format(contract_name=contract_name, display_name=display_name, symbol=symbol)
    file_name = f"./contracts/child/{contract_name}.sol"
    file_paths.append(file_name)
    with open(file_name, "w") as file:
        file.write(contract_content)
