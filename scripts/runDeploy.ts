import { ethers, network } from 'hardhat';
import { getRegistry } from './getRegistry';
import * as C from './constants';
import {
  deployContracts,
  configureCatalogAria,
  configureCatalogLuna,
  configureCatalogRyker,
  configureCatalogThaddeus,
  mintParentSquadAria,
  mintParentSquadLuna,
  mintParentSquadRyker,
  mintParentSquadThaddeus,
  addItemAssetsAriaArmor,
  addItemAssetsAriaCap,
  addItemAssetsAriaLeftHand,
  addItemAssetsAriaRightHand,
  addItemAssetsLunaArmor,
  addItemAssetsLunaCap,
  addItemAssetsLunaLeftHand,
  addItemAssetsLunaRightHand,
  addItemAssetsRykerArmor,
  addItemAssetsRykerCap,
  addItemAssetsRykerLeftHand,
  addItemAssetsRykerRightHand,
  addItemAssetsThaddeusArmor,
  addItemAssetsThaddeusCap,
  addItemAssetsThaddeusLeftHand,
  addItemAssetsThaddeusRightHand,
  mintItemsAriaArmor,
  mintItemsAriaCap,
  mintItemsAriaLeftHand,
  mintItemsAriaRightHand,
  mintItemsLunaArmor,
  mintItemsLunaCap,
  mintItemsLunaLeftHand,
  mintItemsLunaRightHand,
  mintItemsRykerArmor,
  mintItemsRykerCap,
  mintItemsRykerLeftHand,
  mintItemsRykerRightHand,
  mintItemsThaddeusArmor,
  mintItemsThaddeusCap,
  mintItemsThaddeusLeftHand,
  mintItemsThaddeusRightHand
} from './utils';

async function main() {
  console.log(`Deploying Contracts to ${network.name} blockchain...`);
  const [deployer] = await ethers.getSigners();

  
  const {
    timeSquadAria,
    timeSquadLuna,
    timeSquadRyker,
    timeSquadThaddeus,
    
    itemsAriaArmor,
    itemsAriaCap,
    itemsAriaLeftHand,
    itemsAriaRightHand,
    itemsLunaArmor,
    itemsLunaCap,
    itemsLunaLeftHand,
    itemsLunaRightHand,
    itemsRykerArmor,
    itemsRykerCap,
    itemsRykerLeftHand,
    itemsRykerRightHand,
    itemsThaddeusArmor,
    itemsThaddeusCap,
    itemsThaddeusLeftHand,
    itemsThaddeusRightHand,
    
    timeSquadCatalogAria,
    timeSquadCatalogLuna,
    timeSquadCatalogRyker,
    timeSquadCatalogThaddeus
  } = await deployContracts();

  // Log the deployed addresses for item contracts
  console.log(`Items Aria Armor deployed to ${itemsAriaArmor.address}`);
  console.log(`Items Aria Cap deployed to ${itemsAriaCap.address}`);
  console.log(`Items Aria Left Hand deployed to ${itemsAriaLeftHand.address}`);
  console.log(`Items Aria Right Hand deployed to ${itemsAriaRightHand.address}`);

  console.log(`Items Luna Armor deployed to ${itemsLunaArmor.address}`);
  console.log(`Items Luna Cap deployed to ${itemsLunaCap.address}`);
  console.log(`Items Luna Left Hand deployed to ${itemsLunaLeftHand.address}`);
  console.log(`Items Luna Right Hand deployed to ${itemsLunaRightHand.address}`);

  console.log(`Items Ryker Armor deployed to ${itemsRykerArmor.address}`);
  console.log(`Items Ryker Cap deployed to ${itemsRykerCap.address}`);
  console.log(`Items Ryker Left Hand deployed to ${itemsRykerLeftHand.address}`);
  console.log(`Items Ryker Right Hand deployed to ${itemsRykerRightHand.address}`);

  console.log(`Items Thaddeus Armor deployed to ${itemsThaddeusArmor.address}`);
  console.log(`Items Thaddeus Cap deployed to ${itemsThaddeusCap.address}`);
  console.log(`Items Thaddeus Left Hand deployed to ${itemsThaddeusLeftHand.address}`);
  console.log(`Items Thaddeus Right Hand deployed to ${itemsThaddeusRightHand.address}`);

  /*

    itemsAriaArmor,
    itemsAriaCap,
    itemsAriaLeftHand,
    itemsAriaRightHand,
    itemsLunaArmor,
    itemsLunaCap,
    itemsLunaLeftHand,
    itemsLunaRightHand,
    itemsRykerArmor,
    itemsRykerCap,
    itemsRykerLeftHand,
    itemsRykerRightHand,
    itemsThaddeusArmor,
    itemsThaddeusCap,
    itemsThaddeusLeftHand,
    itemsThaddeusRightHand,

  */


  const registry = await getRegistry();
  let tx1 = await registry.addExternalCollection(timeSquadLuna.address,C.SQUAD_METADATA);
  let tx2 = await registry.addExternalCollection(timeSquadRyker.address,C.SQUAD_METADATA);
  let tx3 = await registry.addExternalCollection(timeSquadThaddeus.address,C.SQUAD_METADATA);
  let tx4 = await registry.addExternalCollection(itemsAriaArmor.address,C.SQUAD_METADATA);
  await Promise.all([tx1.wait(), tx2.wait(),tx3.wait(), tx4.wait()]);
  console.log('Collections added to Singular Registry');
  
  let tx01 = await registry.addExternalCollection(itemsAriaArmor.address, C.SQUAD_ITEM_METADATA);
  let tx02 = await registry.addExternalCollection(itemsAriaCap.address, C.SQUAD_ITEM_METADATA);
  let tx03 = await registry.addExternalCollection(itemsAriaLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx04 = await registry.addExternalCollection(itemsAriaRightHand.address, C.SQUAD_ITEM_METADATA);
  
  let tx05 = await registry.addExternalCollection(itemsLunaArmor.address, C.SQUAD_ITEM_METADATA);
  let tx06 = await registry.addExternalCollection(itemsLunaCap.address, C.SQUAD_ITEM_METADATA);
  let tx07 = await registry.addExternalCollection(itemsLunaLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx08 = await registry.addExternalCollection(itemsLunaRightHand.address, C.SQUAD_ITEM_METADATA);
  
  let tx09 = await registry.addExternalCollection(itemsRykerArmor.address, C.SQUAD_ITEM_METADATA);
  let tx10 = await registry.addExternalCollection(itemsRykerCap.address, C.SQUAD_ITEM_METADATA);
  let tx11 = await registry.addExternalCollection(itemsRykerLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx12 = await registry.addExternalCollection(itemsRykerRightHand.address, C.SQUAD_ITEM_METADATA);
  
  let tx13 = await registry.addExternalCollection(itemsThaddeusArmor.address, C.SQUAD_ITEM_METADATA);
  let tx14 = await registry.addExternalCollection(itemsThaddeusCap.address, C.SQUAD_ITEM_METADATA);
  let tx15 = await registry.addExternalCollection(itemsThaddeusLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx16 = await registry.addExternalCollection(itemsThaddeusRightHand.address, C.SQUAD_ITEM_METADATA);
  
  await Promise.all([
    tx01.wait(), tx02.wait(), tx03.wait(), tx04.wait(),
    tx05.wait(), tx06.wait(), tx07.wait(), tx08.wait(),
    tx09.wait(), tx10.wait(), tx11.wait(), tx12.wait(),
    tx13.wait(), tx14.wait(), tx15.wait(), tx16.wait()
  ]);
  console.log('All item collections added to Singular Registry');
  


  // Configure catalogs
  await configureCatalogAria(timeSquadCatalogAria, itemsAriaArmor.address);
  await configureCatalogLuna(timeSquadCatalogLuna, itemsLunaArmor.address);
  await configureCatalogRyker(timeSquadCatalogRyker, itemsRykerArmor.address);
  await configureCatalogThaddeus(timeSquadCatalogThaddeus, itemsThaddeusArmor.address);
  console.log('Catalogs configured');

  // Mint parent squads
  await mintParentSquadAria(timeSquadAria, timeSquadCatalogAria.address, deployer);
  await mintParentSquadLuna(timeSquadLuna, timeSquadCatalogLuna.address, deployer);
  await mintParentSquadRyker(timeSquadRyker, timeSquadCatalogRyker.address, deployer);
  await mintParentSquadThaddeus(timeSquadThaddeus, timeSquadCatalogThaddeus.address, deployer);
  console.log('Parent squads minted');

  // Add item assets and mint them
  // Add item assets and mint them for Aria:
  await addItemAssetsAriaArmor(itemsAriaArmor, timeSquadAria.address);
  await addItemAssetsAriaCap(itemsAriaCap, timeSquadAria.address);
  await addItemAssetsAriaLeftHand(itemsAriaLeftHand, timeSquadAria.address);
  await addItemAssetsAriaRightHand(itemsAriaRightHand, timeSquadAria.address);
  console.log('Aria item assets added');

  await mintItemsAriaArmor(itemsAriaArmor, timeSquadAria.address);
  await mintItemsAriaCap(itemsAriaCap, timeSquadAria.address);
  await mintItemsAriaLeftHand(itemsAriaLeftHand, timeSquadAria.address);
  await mintItemsAriaRightHand(itemsAriaRightHand, timeSquadAria.address);
  console.log('Aria items minted');

  // Add item assets and mint them for Luna
await addItemAssetsLunaArmor(itemsLunaArmor, timeSquadLuna.address);
await addItemAssetsLunaCap(itemsLunaCap, timeSquadLuna.address);
await addItemAssetsLunaLeftHand(itemsLunaLeftHand, timeSquadLuna.address);
await addItemAssetsLunaRightHand(itemsLunaRightHand, timeSquadLuna.address);
console.log('Luna item assets added');

await mintItemsLunaArmor(itemsLunaArmor, timeSquadLuna.address);
await mintItemsLunaCap(itemsLunaCap, timeSquadLuna.address);
await mintItemsLunaLeftHand(itemsLunaLeftHand, timeSquadLuna.address);
await mintItemsLunaRightHand(itemsLunaRightHand, timeSquadLuna.address);
console.log('Luna items minted');

// Add item assets and mint them for Ryker
await addItemAssetsRykerArmor(itemsRykerArmor, timeSquadRyker.address);
await addItemAssetsRykerCap(itemsRykerCap, timeSquadRyker.address);
await addItemAssetsRykerLeftHand(itemsRykerLeftHand, timeSquadRyker.address);
await addItemAssetsRykerRightHand(itemsRykerRightHand, timeSquadRyker.address);
console.log('Ryker item assets added');

await mintItemsRykerArmor(itemsRykerArmor, timeSquadRyker.address);
await mintItemsRykerCap(itemsRykerCap, timeSquadRyker.address);
await mintItemsRykerLeftHand(itemsRykerLeftHand, timeSquadRyker.address);
await mintItemsRykerRightHand(itemsRykerRightHand, timeSquadRyker.address);
console.log('Ryker items minted');

// Add item assets and mint them for Thaddeus
await addItemAssetsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
await addItemAssetsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
await addItemAssetsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
await addItemAssetsThaddeusRightHand(itemsThaddeusRightHand, timeSquadThaddeus.address);
console.log('Thaddeus item assets added');

await mintItemsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
await mintItemsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
await mintItemsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
await mintItemsThaddeusRightHand(itemsThaddeusRightHand, timeSquadThaddeus.address);
console.log('Thaddeus items minted');

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



/*

  const registry = await getRegistry();
  let tx1 = await registry.addExternalCollection(chunkies.address, C.CHUNKY_METADATA);
  let tx2 = await registry.addExternalCollection(items.address, C.CHUNKY_ITEM_METADATA);
  await Promise.all([tx1.wait(), tx2.wait()]);
  console.log('Collections added to Singular Registry');

  await configureCatalog(catalog, items.address);
  console.log('Catalog configured');

  // Each chunky has a unique asset, so we add assets and mint in the same method
  await mintChunkies(chunkies, catalog.address, deployer);
  console.log('Chunkies minted');

  // Items reuse assets, we only need to add them once
  await addItemAssets(items, chunkies.address);
  console.log('Item assets added');

  await mintItems(items, chunkies.address);
  console.log('Items minted');
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
**/