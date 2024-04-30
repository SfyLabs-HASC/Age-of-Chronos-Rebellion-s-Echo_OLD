import { ethers } from 'hardhat';

import * as C from '../constants';
import {
    TimeSquadRyker,
    TimeSquadLuna,
    TimeSquadAria,
    TimeSquadThaddeus,
    TimeSquadCatalogAria,
    TimeSquadCatalogLuna,
    TimeSquadCatalogRyker,
    TimeSquadCatalogThaddeus,
    ItemsAriaArmor,
    ItemsAriaCap,
    ItemsAriaLeftHand,
    ItemsAriaRightHand,
    ItemsLunaArmor,
    ItemsLunaCap,
    ItemsLunaLeftHand,
    ItemsLunaRightHand,
    ItemsRykerArmor,
    ItemsRykerCap,
    ItemsRykerLeftHand,
    ItemsRykerRightHand,
    ItemsThaddeusArmor,
    ItemsThaddeusCap,
    ItemsThaddeusLeftHand,
    ItemsThaddeusRightHand
} from '../../typechain-types';

async function main() {

    const signers = (await ethers.getSigners());
    const deployerAddress = signers[0].address;

    const contractParentAddresses: { [key: string]: string } = {
        "Aria": "0x8Ce12c4e792Bc6b41fD5b654A8498F6428ec617B",
        "Luna": "",
        "Ryker": "",
        "Thaddeus": ""
    };

    const contractCatalogAddresses: { [key: string]: string } = {
        "Aria": "0xc9698924AbB977D26B34D0093653492408863C18",
        "Luna": "",
        "Ryker": "",
        "Thaddeus": ""
    };

    const contractItemAddresses: { [key: string]: string } = {
        "AriaArmor": "0xe5c8cb06f38ae8bc3aa559e4332721ed45a419d0",
        "AriaCap": "0x974D6004a9629998D3315e6172dDF618d07355eB",
        "AriaLeftHand": "0x9E8de747bCfc1982d4aE96cdf5F09178325AD29e",
        "AriaRightHand": "0x84dc4274C3E57364E589a97421E3DC834A355b9D",
        "LunaArmor": "",
        "LunaCap": "0x5026F1eE7a28f7048aBeafEa9E17934c7f736d4C",
        "LunaLeftHand": "0x8D56c5A55E91A69f291bC4f1B2D858bf84403966",
        "LunaRightHand": "0x0f89B30fa13afc81e8321F124fCA47DaE3b51771",
        "RykerArmor": "0xE84dCb232CCF866291CBb66E602D4263e6557039",
        "RykerCap": "0x4Ffba015350749C577A6c2e6E68e7ef6DBddCF6B",
        "RykerLeftHand": "0xEC1b5A9D8480150d543521CB870FEAF24bfC5c0B",
        "RykerRightHand": "0xF609c68D0C30F355aDF991b21b946b1f0614994f",
        "ThaddeusArmor": "0x8c8c905DBf30e9A7e6e08276C741Dbd1295BeA96",
        "ThaddeusCap": "0x8FcBA5dE04e902442Ed7eB8d437C14A87a52A1E0",
        "ThaddeusLeftHand": "0xE757DdCD09464C450977bdCB442319aA363134f4",
        "ThaddeusRightHand": "0xb44bd5735385126E56EDD4d6418E5478dCd9E3d5"
    };

    console.log(contractParentAddresses['Aria'])
    console.log(contractItemAddresses['AriaArmor'])

    try {
        // Dati per la funzione mintWithEquippableAsset
        const equippableGroupId = 1;  // Assumi che questo sia un valore costante definito da te
        //const metadataURI = `ipfs://QmfXDJdz4T2P9wcg3coq2XA8JsdqbUTmUnWqx4EKyx3pCy`; // URI metadati
        //const tokenURI = `ipfs://QmVsQJB9mR5twbg12nEJtTk1fhX3g1ev6EuFyzNGJCKEKB`; // Token URI
        const metadataURI = `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`; // URI metadati
        const tokenURI = `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`; // Token URI
        const partIds = [
            C.SQUAD_LEFT_HAND_SLOT_PART_ID,
            C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
            C.SQUAD_CAP_SLOT_PART_ID,
            C.SQUAD_ARMOR_SLOT_PART_ID,
            1
        ]; // IDs delle parti equipaggiabili
        const timeSquadAria = await ethers.getContractAt("TimeSquadAria", contractParentAddresses['Aria'], signers[0]);
        const TimeSquadCatalogAria = await ethers.getContractAt("TimeSquadCatalogAria", contractCatalogAddresses['Aria'], signers[0]);

        let tx = await timeSquadAria.mintWithEquippableAsset(
            deployerAddress,  // A chi inviare
            tokenURI,  // TokenURI del NFT
            equippableGroupId,  // Gruppo equipaggiabile
            contractCatalogAddresses['Aria'],  // Indirizzo catalogo
            metadataURI,  // URI metadati
            partIds  // IDs delle parti
        );
        await tx.wait();
        console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }


    try {
        const armorFirstAssetId = 1;
        const armorSecondAssetId = 2;
        const itemsAriaArmor = await ethers.getContractAt("ItemsAriaArmor", contractItemAddresses['AriaArmor'], signers[0]);

        // Sending a armor NFT to the first parent squad, with 2 assets
        let tx = await itemsAriaArmor.nestMintWithAssets(
            contractParentAddresses['Aria'], // To
            4, // destinationId il primo nft parent
            `${C.BASE_IPFS_URI}/items/aria/01_armor_primary_asset.json`, // TokenURI del child nft,
            [armorFirstAssetId] // Assets
        );
        await tx.wait();

        console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }


}





main().catch((error) => {
    console.error('Error in main execution:', error);
    process.exitCode = 1;
});