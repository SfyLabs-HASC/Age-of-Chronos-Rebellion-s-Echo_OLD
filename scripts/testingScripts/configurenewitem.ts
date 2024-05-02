import { ethers } from 'hardhat';
import * as C from '../constants';
import { getRegistry } from '../getRegistry';
import {
    
    TimeSquadAria,
    
      TimeSquadCatalogAria,
      
      ItemsAriaArmor,
      ItemsAriaCap,
      ItemsAriaLeftHand,
      ItemsAriaRightHand,
      NewItemsAriaArmor,
      
    } from '../../typechain-types';




async function main() {

    const delay = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
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
        "NewItem": "0xEF2bFc3db1F5d719b92adEB84c41cE7DdF93Eae4"
    }


/*
    try {
        const registry = await getRegistry();
        let tx01 = await registry.addExternalCollection(contractItemAddresses['NewItem'], C.SQUAD_ITEM_METADATA_ARIA_ARMOR);
        await tx01.wait();

        console.log(`Transaction successful: ${tx01.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }

*/

    const timeSquadCatalogAria = await ethers.getContractAt("TimeSquadCatalogAria", contractCatalogAddresses['Aria'], signers[0]);
/*
    // Single part
    const intakeStruct = {
        partId: C.SQUAD_ARMOR_SLOT_PART_ID,
        part: {
          itemType: C.PART_TYPE_SLOT,
          z: C.Z_INDEX_ARMOR_ITEMS,
          equippable: [contractItemAddresses['NewItem']],
          metadataURI: `${C.SQUAD_ITEM_ARMOR_SLOT_METADATA}`,
        },
    }

    try {
        let tx = await timeSquadCatalogAria.addPart(intakeStruct)
        await tx.wait();
        console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
    await delay(10000); /// waiting 10 second.
    console.log("add part fatta")
    //setequipabbleaddress

*/
    //finale
    const newItemsAriaArmor = await ethers.getContractAt("NewItemsAriaArmor", contractItemAddresses['NewItem'], signers[0]);
    try {
    let tx = await newItemsAriaArmor.addTwoItemAssets(
        C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
     `${C.BASE_IPFS_URI}/items/aria/01_armor_primary_asset.json`,  //THUMB false
     `${C.BASE_IPFS_URI}/items/aria/01_armor_secondary_asset.json`,  //second asset (todo dovresti cambiare il metadata) THUMB true
      );
      await tx.wait();
      console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
    
      // WARNING: This is necessary to show the intention of groups of assets to be equipped into specific collection and slots. This is the reason we have equippable group ids.
      await newItemsAriaArmor.setValidParentForEquippableGroup(
        C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
        contractParentAddresses['Aria'],
        C.SQUAD_ARMOR_SLOT_PART_ID,
      );


      const armorFirstAssetId = 1;
      const armorSecondAssetId = 2;
    
      const [deployer] = await ethers.getSigners();
    
      // Sending a armor NFT to the first parent squad, with 2 assets
      let tx = await newItemsAriaArmor.nestMintWithAssets(
        contractParentAddresses['Aria'], // To
        2, // destinationId il primo nft parent
        `${C.BASE_IPFS_URI}/items/aria/01_armor_primary_asset.json`, // TokenURI del child nft,
        [armorFirstAssetId,armorSecondAssetId], // Assets
      );
      await tx.wait();





}

main().catch((error) => {
    console.error('Error in main execution:', error);
    process.exitCode = 1;
});
