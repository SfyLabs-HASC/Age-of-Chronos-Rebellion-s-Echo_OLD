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
        "Aria": "0xc4b77ba8F29c11D4e154B1aeb98FabDCcC6B614d",
        "Luna": "0x2db533bDFba2af4e64A4B45d26cc4D6952b8eDCf",
        "Ryker": "0x1d15E26eaC86fee67d2D78Ff9aFDe9dd74Cd148B",
        "Thaddeus": "0x058CA62DC5A7FCef9f1D1C275601189572Ca699B"
    };
    

    const contractCatalogAddresses: { [key: string]: string } = {
        "Aria": "0xB5272CC04a0C41b08b001bD04f7B6f50cAB527ca",
        "Luna": "0xDe095f942f798f7F6fdCf4EE8bE34601e5b0c655",
        "Ryker": "0x2a98a5d61b80f996402595FABfE3b47D54D9B1E7",
        "Thaddeus": "0xF788baa8af703536a7a2Bf5Ba3307382CC35A5E0"
    };

    const contractItemAddresses: { [key: string]: string } = {
        "AriaArmor": "0xe7C9a1088Be68b818A374D6286d9E5B6b6777AB0",
        "AriaCap": "0x4494d76693A57d01b1Ab2CdCAC1fFF69618f1E95",
        "AriaLeftHand": "0x2fc9D1a3bdc51aE8D7D041532851b42D200870a2",
        "AriaRightHand": "0xa14e50831f03bE4888785a48De6D9Ee9281C51cA",
        "LunaArmor": "0x2300705f9592983d3e1141A822514F4Af92E0caC",
        "LunaCap": "0x54802Fc3678559Ef2aaF2726083Cfaa5F8284262",
        "LunaLeftHand": "0xBE0d77DD8D3FDF4d2d4C147dCd6ce8D12d1aed7B",
        "LunaRightHand": "0x2ED07cfEC002dE223018E901EA5ED3C5d8e33D92",
        "RykerArmor": "0x205D08f8bDe1926b3B800cABCC2e0523CBd356B9",
        "RykerCap": "0x3F57809Fcf34B793e17Cf7e0c98918B67B3599f0",
        "RykerLeftHand": "0x71997A39627017Bf83B09fF90Ba45242241Fbe05",
        "RykerRightHand": "0x06Fe54F5D1Cde870ED1D7Ea1fc67a2142BBEB89f",
        "ThaddeusArmor": "0x7c9e964fE85b70be6EEb61d58440934F4adB5Bd2",
        "ThaddeusCap": "0xA919815976edC4f9F36fD025F162D05a5C70D66a",
        "ThaddeusLeftHand": "0x0648b83950F637Da2e5499ADCEBe88B5E4FB1225",
        "ThaddeusRightHand": "0xb50d0D9c39ebdE6D914A80C05E2E5004beaCCEE8"
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
