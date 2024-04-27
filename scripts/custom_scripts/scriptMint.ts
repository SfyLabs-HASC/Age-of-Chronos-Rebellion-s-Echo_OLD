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
        "Aria": "0x8269c3fe7bef60dbd7adf8d2e64ad8d94901716f",
        "Luna": "",
        "Ryker": "",
        "Thaddeus": ""
    };

    const contractCatalogAddresses: { [key: string]: string } = {
        "Aria": "0x50fa6d8f49462e930E0c1DC02794637518BA4dE9",
        "Luna": "",
        "Ryker": "",
        "Thaddeus": ""
    };

    /*


    Catalog Aria deployed to 0x50fa6d8f49462e930E0c1DC02794637518BA4dE9
Catalog Luna deployed to 0xFA84e7E025cc25667621acDc32610851ed68C659
Catalog Ryker deployed to 0xE94ddDfEbFFf00BcAF84B7e5d634c172E2CdD7f2
Catalog Thaddeus deployed to 0xCf4a4Cd446c0cFCE6A5D6449C3bd9b251e8aCaa2



Deploying Contracts to moonbaseAlpha blockchain...
timeSquadAria deployed to 0x8269C3fE7bef60Dbd7ADf8D2e64Ad8d94901716F
timeSquadLuna deployed to 0x433823CB45b0bd9294A5cc3679d655DB11476cDB
timeSquadRyker deployed to 0x9e76cE1a38709dF92A283BeCe9E1242d156ba051
timeSquadThaddeus deployed to 0xA14797488ECDd2ACAc176d7205B1C9d226DdE252
parent Deployati
Catalog Aria deployed to 0x50fa6d8f49462e930E0c1DC02794637518BA4dE9
Catalog Luna deployed to 0xFA84e7E025cc25667621acDc32610851ed68C659
Catalog Ryker deployed to 0xE94ddDfEbFFf00BcAF84B7e5d634c172E2CdD7f2
Catalog Thaddeus deployed to 0xCf4a4Cd446c0cFCE6A5D6449C3bd9b251e8aCaa2
catalog Deployati
Items Aria Armor deployed to 0xeE89C51df7547Ab0e2aD43B674482b1Ff1B1BC5f
Items Aria Cap deployed to 0xDA97f6d5f68dED0018514b2D4266C79C2a451C29
Items Aria Left Hand deployed to 0x486D4ea5f1482D16cC07582972cA361da0365518
Items Aria Right Hand deployed to 0x8d63cd93FB87DAADFc008405cdd7Fd2132366759
Items Luna Armor deployed to 0x74f4Be56d032F5C326E0a452aB584F60d7f5fd9C
Items Luna Cap deployed to 0x94754ee8Fa4d9B482c14c277F68A79487aDF23CB
Items Luna Left Hand deployed to 0xe5169E2CCA88a601BA4578564a39ADCebA68D1b4
Items Luna Right Hand deployed to 0x402ae305894D22D36d18056005B82dCCC46AD4c6
Items Ryker Armor deployed to 0xCe7a75E008576B9D51060369f6F907409b9C3B9a
Items Ryker Cap deployed to 0x11F18b518fD7faA713DaD5d7e0b0343D80014210
Items Ryker Left Hand deployed to 0x1eb87587557e16630882240D0a3812BA19947953
Items Ryker Right Hand deployed to 0x4D51Cc97e2150df5730cb6d8FCC78221144A078f
Items Thaddeus Armor deployed to 0xa3EBb67CfBccCD7BcF8F19fF868f1336c2AAb169
Items Thaddeus Cap deployed to 0x1d42A976056C256ACA54Da6daBaC12E8f8D0CFE1
Items Thaddeus Left Hand deployed to 0xE9eAbc749948158025550d83bAed9814995C7FBB
Items Thaddeus Right Hand deployed to 0x4BeeFD7de3D096c4Ab5318182AaDf02EEC262fc6
items Deployati





async function mintParentSquadAria(timeSquadAria: TimeSquadAria, timeSquadCatalogAria: string, mintTo: SignerWithAddress) {
  let txAria = await timeSquadAria.mintWithEquippableAsset(
    mintTo.address, 
    `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`, 
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
    timeSquadCatalogAria, 
    `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`, 
    [
      C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      C.SQUAD_CAP_SLOT_PART_ID,
      C.SQUAD_ARMOR_SLOT_PART_ID
    ],
  );
  await txAria.wait();
}
    */

    // Assumi che ItemsAriaLeftHand sia già distribuito e conosci il suo indirizzo
    const timeSquadAria = await ethers.getContractAt("TimeSquadAria", contractParentAddresses['Aria'], signers[0]);
    const TimeSquadCatalogAria = await ethers.getContractAt("TimeSquadCatalogAria", '0x50fa6d8f49462e930E0c1DC02794637518BA4dE9', signers[0]);


// Definire l'ID della parte e gli indirizzi equipaggiabili
const partId = 1003; // Sostituisci con l'ID della parte corretto
const equippableAddresses = [
    "0xDA97f6d5f68dED0018514b2D4266C79C2a451C29"  // ItemsAriaCap
    // Aggiungi altri indirizzi se necessario
];

try {
    const tx = await TimeSquadCatalogAria.setEquippableAddresses(partId, equippableAddresses);
    await tx.wait();
    console.log(`Transaction successful: ${tx.hash}`);
} catch (error) {
    console.error('Transaction failed:', error);
}

    /*

    // Dati per la funzione mintWithEquippableAsset
    const equippableGroupId = 1;  // Assumi che questo sia un valore costante definito da te
    const metadataURI = `ipfs://QmfXDJdz4T2P9wcg3coq2XA8JsdqbUTmUnWqx4EKyx3pCy`; // URI metadati
    const tokenURI = `ipfs://QmVsQJB9mR5twbg12nEJtTk1fhX3g1ev6EuFyzNGJCKEKB`; // Token URI
    //const metadataURI = `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`; // URI metadati
    //const tokenURI = `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`; // Token URI
    const partIds = [
        C.SQUAD_LEFT_HAND_SLOT_PART_ID,
        C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
        C.SQUAD_CAP_SLOT_PART_ID,
        C.SQUAD_ARMOR_SLOT_PART_ID
    ]; // IDs delle parti equipaggiabili

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

    */
}

main().catch((error) => {
    console.error('Error in main execution:', error);
    process.exitCode = 1;
});
