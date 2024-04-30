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
    "Aria": "0x3c6B21308Ce42b6F4ce39E5F7AAd398fbC49B2AC",
    "Luna": "0x8fd8e15F7cF8349686Ab681d2520D02007a6F9eB",
    "Ryker": "0x1dae8dB1653a76C78E8f5Df9994527646b0E7e09",
    "Thaddeus": "0xBAB34b828A94043a81Ef8a4ad56050612Be7CB8A"
};

const contractCatalogAddresses: { [key: string]: string } = {
    "Aria": "0xee800fF0837F6664859D97b87823bf0B7AD91868",
    "Luna": "0xA895fc0853768652cB4d78503876f1b15C1dcFC7",
    "Ryker": "0xe10d3e6977D4Fb4Dac7a8991673C0Fb0E7Eba94C",
    "Thaddeus": "0x2Bf13b8dfd9dc549Ca7EFBFe988C96749c6629f1"
};

const contractItemAddresses: { [key: string]: string } = {
    "AriaArmor": "0x30c04A37B9Da803B335B544463C142f7815F3fE4",
    "AriaCap": "0x363927649746601Ad887799Fb97526B08069DB09",
    "AriaLeftHand": "0xBEE856D2DA17569C5E2BFf65695cF6364f1Fa0bF",
    "AriaRightHand": "0xd454Ee24254e90ac4Ac2404969d76FCa07A9c0f1",
    "LunaArmor": "0x86044333167221E2E51433CFcB566D1034dd075a",
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


    // Assumi che ItemsAriaLeftHand sia già distribuito e conosci il suo indirizzo
    const timeSquadAria = await ethers.getContractAt("TimeSquadAria", contractParentAddresses['Aria'], signers[0]);
    const TimeSquadCatalogAria = await ethers.getContractAt("TimeSquadCatalogAria", '0x50fa6d8f49462e930E0c1DC02794637518BA4dE9', signers[0]);


try {
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




// Assumi che ItemsAriaLeftHand sia già distribuito e conosci il suo indirizzo
const itemsAriaCap = await ethers.getContractAt("ItemsAriaCap", contractItemAddresses['AriaCap'], signers[0]);

// Dati per la funzione nestMintWithAssets
const leftHandFirstAssetId = 1;
const leftHandSecondAssetId = 2;

try {
    let tx = await itemsAriaCap.nestMintWithAssets(
        contractParentAddresses['Aria'], // A chi inviare
        2, // destinationId del primo NFT parent
        `${C.BASE_IPFS_URI}/items/aria/02_cap_primary_asset.json`, // TokenURI del NFT figlio
        [leftHandFirstAssetId] // Assets IDs
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
