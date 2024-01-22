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

async function main() {


    const contractParentAddresses: { [key: string]: string } = {
        "Aria": "0xAbca4357640539B169F6b16214AC3039F9f9aF38",
        "Luna": "0x1E7219fAFf87265431320BB291845Ec308A03222",
        "Ryker": "0x3b85e80d22a2778a56817dD8456d214c136D0f50",
        "Thaddeus": "0x1447ADe5327463d0788f80A94F921a8b669F2B1c"
    };
    
    

    const contractCatalogAddresses: { [key: string]: string } = {
        "Aria": "0xA9eE3A2A0B7e6490F493463E7F545EEd16b14e56",
        "Luna": "0x840c13858090F2869Ba95B2c254Ae343aa1C10c6",
        "Ryker": "0x80292f35D6F9EbF94A4911379c5019aDf76C4d33",
        "Thaddeus": "0x375FA08398f793998371cC80774ab9f8CC531539"
    };
    

    const contractItemAddresses: { [key: string]: string } = {
        "AriaArmor": "0x371Fef6D54FEa1ECf125F6633d6F61055cbF45F4",
        "AriaCap": "0x5681fEa9f7219CEaD0e087C80F9ab539F3d3553C",
        "AriaLeftHand": "0x86c5A636C45bacFc736A2E5a142C47FC7A4EA812",
        "AriaRightHand": "0x2ec208A0fD1BdF6a7db292522cac95Cba674E000",
        "LunaArmor": "0xcE8401Df8696151a290777d4547D33F95a7458bD",
        "LunaCap": "0xDb163CE2f621e4DE80dC62bF41e78fA68c3b4f9c",
        "LunaLeftHand": "0x65a1B700E89824eB5238fFBaf70Aec2A7D540f1C",
        "LunaRightHand": "0x1FD9A1e512348D8E7f70F3f9a8d15D2F0eeb11bb",
        "RykerArmor": "0xAB5aAF41Aaa1b4311218cF8A3C2b80b5c008429D",
        "RykerCap": "0x7cDd1baC0E265B08090c928CFc7a079F50e7241c",
        "RykerLeftHand": "0xdDC8705E20819b34156122a8B08764029f131609",
        "RykerRightHand": "0xc13684aec8EE62ec58092bdc27036c233db23789",
        "ThaddeusArmor": "0x0847f79Ad21345642d0C10dF1714f7Fe442a49F0",
        "ThaddeusCap": "0xa13F3BE3cc14F0c54e4B2504f9B4C52802Cb838C",
        "ThaddeusLeftHand": "0xb174E09f5F83f0bcc9b50bB89632b02FCfCCF00D",
        "ThaddeusRightHand": "0xF0Bb07B3886625eC1AD7b16b7A0a9F15e4C31b1d"
    };
    
    



    const signers = (await ethers.getSigners());
    const deployerAddress = signers[0].address;
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
}

main().catch(error => {
    console.error(error);
    process.exitCode = 1;
});
