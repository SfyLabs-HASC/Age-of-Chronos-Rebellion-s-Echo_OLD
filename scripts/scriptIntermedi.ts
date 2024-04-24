import { ethers } from 'hardhat';
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
    } from '../typechain-types';
    import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import * as C from './constants';

import {
mintItemsThaddeusArmor,
mintItemsThaddeusCap,
mintItemsThaddeusLeftHand,
mintItemsThaddeusRightHand
} from './utils';



async function main() {

    const signers = (await ethers.getSigners());
    const deployerAddress = signers[0].address;

    const contractParentAddresses: { [key: string]: string } = {
        "Aria": "0x027F30069C15459ca08552B88915EBF38606e38e",
        "Luna": "0x77ff3e283079e83Fba2e2f95399627dCE8D7731A",
        "Ryker": "0x6131Fb06D3dE578A9DF947B32a8d65D93Be54B06",
        "Thaddeus": "0x5Ec76143D5CB9EA58d043fD71CBed2F1ccFE68c7"
    };
    

    const contractCatalogAddresses: { [key: string]: string } = {
        "Aria": "0xa2BE213196C641B5E7511A0388371168047C2623",
        "Luna": "0x410455058D065a03207758391Ba66c93546264A3",
        "Ryker": "0x6eFbA2846e2C3C716fD4869cd8051E7e924EF18B",
        "Thaddeus": "0x9ce185Fc0fBd98d1382C144FE106a855Cd75dED0"
    };
    

    const contractItemAddresses: { [key: string]: string } = {
        "AriaArmor": "0x182270Cc7859670Efe94E1B308C781cf7355e885",
        "AriaCap": "0x812a3bb3adEbbcDa5E095b20C48B1A3885C114ac",
        "AriaLeftHand": "0xf01C019c1f66BB845300138Faf24857F8E91862B",
        "AriaRightHand": "0x505559b9d75cE81c79052b73d7dD413a3717aD92",
        "LunaArmor": "0x0c13870CB13d01908b9716b764BC3422EF32A8B2",
        "LunaCap": "0xeB57419FC73E5cE7dB1254F87a0485eCdd5cAF1c",
        "LunaLeftHand": "0x623Ba139469eFDd2f131694c17b185659459091f",
        "LunaRightHand": "0x80d05d62a63b633A5E157551EfB05d68dCAdF0cd",
        "RykerArmor": "0x6e68efF194492A7a57F9bc345D0e83Cbabbb5e7b",
        "RykerCap": "0xeCA349AF953dB4185c4d9F2219BcF5FAF7cd5d06",
        "RykerLeftHand": "0x5820D0B8458b78F3cC09111Da1AbF2Ba66ebB62a",
        "RykerRightHand": "0xAFc0039Eb091d51DBE1C5cb39754F11E6215f2A9",
        "ThaddeusArmor": "0x41D0Ac53b7bFF9c1C51D15acfb32738b9e4bAdae",
        "ThaddeusCap": "0x56C4c12a809D6D691049Df21393895b68D2365F8",
        "ThaddeusLeftHand": "0x0f21EE016367E826b8627B120EB5F7891342d5b8",
        "ThaddeusRightHand": "0x4bAbD91Fe6886E481CC1DE5559f940e813Be49b2"
    };
    
    

    /*DA QUI DOVRESTI MODIFICARE*/

const timeSquadThaddeus = await ethers.getContractAt("TimeSquadThaddeus", contractParentAddresses['Thaddeus'], signers[0]);
const itemsThaddeusArmor = await ethers.getContractAt("ItemsThaddeusArmor", contractItemAddresses['ThaddeusArmor'], signers[0]);
const itemsThaddeusCap = await ethers.getContractAt("ItemsThaddeusCap", contractItemAddresses['ThaddeusCap'], signers[0]);
const itemsThaddeusLeftHand = await ethers.getContractAt("ItemsThaddeusLeftHand", contractItemAddresses['ThaddeusLeftHand'], signers[0]);
const itemsThaddeusRightHand = await ethers.getContractAt("ItemsThaddeusRightHand", contractItemAddresses['ThaddeusRightHand'], signers[0]);

// Define a helper function to pause execution
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Mint Thaddeus items with delays between transactions to avoid rate limit issues
await mintItemsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
await delay(1000); // waiting 10 seconds
await mintItemsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
await delay(1000); // waiting 10 seconds
await mintItemsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
await delay(1000); // waiting 10 seconds
await mintItemsThaddeusRightHand(itemsThaddeusRightHand, timeSquadThaddeus.address);
console.log('Thaddeus items minted');


    /*
    
    //const moonbaseAlphaUrl = process.env.MOONBASE_URL || 'https://rpc.testnet.moonbeam.network';
    //const provider = new ethers.providers.JsonRpcProvider(moonbaseAlphaUrl);
    //const timeSquadAria = new ethers.Contract(contractParentAddresses['Aria'], TimeSquadAria.interface.abi, provider);
    console.log(contractParentAddresses['Aria']);
    const timeSquadAria = await ethers.getContractAt("TimeSquadAria", contractParentAddresses['Aria'], signers[0]);




    //funzione di interazione
    const gasLimit = ethers.utils.hexlify(10000000); // esempio di limite di gas

    const txAria = await timeSquadAria.mintWithEquippableAsset(
        deployerAddress, 
        `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`, 
        C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
        contractCatalogAddresses['Aria'], 
        `${C.BASE_IPFS_URI}/timeSquad/full/Aria.json`, 
        [
          C.SQUAD_LEFT_HAND_SLOT_PART_ID,
          C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
          C.SQUAD_CAP_SLOT_PART_ID,
          C.SQUAD_ARMOR_SLOT_PART_ID
        ],
        { gasLimit } // Aggiungi il limite di gas qui
    );
      await txAria.wait();
      console.log(txAria);

      */
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
