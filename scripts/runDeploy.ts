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

  /*
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
*/
  const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  await delay(10000) /// waiting 10 second.

  const registry = await getRegistry();
  let tx1 = await registry.addExternalCollection(timeSquadLuna.address, C.SQUAD_METADATA_LUNA);
  let tx2 = await registry.addExternalCollection(timeSquadRyker.address, C.SQUAD_METADATA_RYKER);
  let tx3 = await registry.addExternalCollection(timeSquadThaddeus.address, C.SQUAD_METADATA_THADDEUS);
  let tx4 = await registry.addExternalCollection(timeSquadAria.address, C.SQUAD_METADATA_ARIA);
  await Promise.all([tx1.wait(), tx2.wait(), tx3.wait(), tx4.wait()]);
  console.log('Parent Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx01 = await registry.addExternalCollection(itemsAriaArmor.address, C.SQUAD_ITEM_METADATA);
  let tx02 = await registry.addExternalCollection(itemsAriaCap.address, C.SQUAD_ITEM_METADATA);
  let tx03 = await registry.addExternalCollection(itemsAriaLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx04 = await registry.addExternalCollection(itemsAriaRightHand.address, C.SQUAD_ITEM_METADATA);
  await Promise.all([
    tx01.wait(), tx02.wait(), tx03.wait(), tx04.wait()
  ]);
  console.log('Aria Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx05 = await registry.addExternalCollection(itemsLunaArmor.address, C.SQUAD_ITEM_METADATA);
  let tx06 = await registry.addExternalCollection(itemsLunaCap.address, C.SQUAD_ITEM_METADATA);
  let tx07 = await registry.addExternalCollection(itemsLunaLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx08 = await registry.addExternalCollection(itemsLunaRightHand.address, C.SQUAD_ITEM_METADATA);
  await Promise.all([
    tx05.wait(), tx06.wait(), tx07.wait(), tx08.wait()
  ]);
  console.log('Luna Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx09 = await registry.addExternalCollection(itemsRykerArmor.address, C.SQUAD_ITEM_METADATA);
  let tx10 = await registry.addExternalCollection(itemsRykerCap.address, C.SQUAD_ITEM_METADATA);
  let tx11 = await registry.addExternalCollection(itemsRykerLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx12 = await registry.addExternalCollection(itemsRykerRightHand.address, C.SQUAD_ITEM_METADATA);
  await Promise.all([
    tx09.wait(), tx10.wait(), tx11.wait(), tx12.wait()
  ]);
  console.log('Ryker Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx13 = await registry.addExternalCollection(itemsThaddeusArmor.address, C.SQUAD_ITEM_METADATA);
  let tx14 = await registry.addExternalCollection(itemsThaddeusCap.address, C.SQUAD_ITEM_METADATA);
  let tx15 = await registry.addExternalCollection(itemsThaddeusLeftHand.address, C.SQUAD_ITEM_METADATA);
  let tx16 = await registry.addExternalCollection(itemsThaddeusRightHand.address, C.SQUAD_ITEM_METADATA);

  await Promise.all([
    tx13.wait(), tx14.wait(), tx15.wait(), tx16.wait()
  ]);
  console.log('Thaddeus Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  console.log('All item collections added to Singular Registry');



  // Configure catalogs
  await configureCatalogAria(timeSquadCatalogAria, itemsAriaArmor.address);
  await configureCatalogLuna(timeSquadCatalogLuna, itemsLunaArmor.address);
  await configureCatalogRyker(timeSquadCatalogRyker, itemsRykerArmor.address);
  await configureCatalogThaddeus(timeSquadCatalogThaddeus, itemsThaddeusArmor.address);
  console.log('Catalogs configured');
  await delay(10000) /// waiting 10 second.
  // Mint parent squads


  //TODO FIN QUI TUTTO OK!!!!
  await mintParentSquadAria(timeSquadAria, timeSquadCatalogAria.address, deployer);
  await delay(1000) /// waiting 10 second.
  await mintParentSquadLuna(timeSquadLuna, timeSquadCatalogLuna.address, deployer);
  await delay(1000) /// waiting 10 second.
  await mintParentSquadRyker(timeSquadRyker, timeSquadCatalogRyker.address, deployer);
  await delay(1000) /// waiting 10 second.
  await mintParentSquadThaddeus(timeSquadThaddeus, timeSquadCatalogThaddeus.address, deployer);
  console.log('Parent squads minted');
  await delay(10000) /// waiting 10 second.
  // Add item assets and mint them
  // Add item assets and mint them for Aria:
  await addItemAssetsAriaArmor(itemsAriaArmor, timeSquadAria.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsAriaCap(itemsAriaCap, timeSquadAria.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsAriaLeftHand(itemsAriaLeftHand, timeSquadAria.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsAriaRightHand(itemsAriaRightHand, timeSquadAria.address);
  console.log('Aria item assets added');
  await delay(10000) /// waiting 10 second.

  await mintItemsAriaArmor(itemsAriaArmor, timeSquadAria.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsAriaCap(itemsAriaCap, timeSquadAria.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsAriaLeftHand(itemsAriaLeftHand, timeSquadAria.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsAriaRightHand(itemsAriaRightHand, timeSquadAria.address);
  console.log('Aria items minted');
  await delay(10000) /// waiting 10 second.
  // Add item assets and mint them for Luna

  await addItemAssetsLunaArmor(itemsLunaArmor, timeSquadLuna.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsLunaCap(itemsLunaCap, timeSquadLuna.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsLunaLeftHand(itemsLunaLeftHand, timeSquadLuna.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsLunaRightHand(itemsLunaRightHand, timeSquadLuna.address);
  console.log('Luna item assets added');
  await delay(10000) /// waiting 10 second.

  await mintItemsLunaArmor(itemsLunaArmor, timeSquadLuna.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsLunaCap(itemsLunaCap, timeSquadLuna.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsLunaLeftHand(itemsLunaLeftHand, timeSquadLuna.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsLunaRightHand(itemsLunaRightHand, timeSquadLuna.address);
  console.log('Luna items minted');
  await delay(10000) /// waiting 10 second.
  
  // Add item assets and mint them for Ryker
  await addItemAssetsRykerArmor(itemsRykerArmor, timeSquadRyker.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsRykerCap(itemsRykerCap, timeSquadRyker.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsRykerLeftHand(itemsRykerLeftHand, timeSquadRyker.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsRykerRightHand(itemsRykerRightHand, timeSquadRyker.address);
  console.log('Ryker item assets added');
  await delay(10000) /// waiting 10 second.
  
  await mintItemsRykerArmor(itemsRykerArmor, timeSquadRyker.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsRykerCap(itemsRykerCap, timeSquadRyker.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsRykerLeftHand(itemsRykerLeftHand, timeSquadRyker.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsRykerRightHand(itemsRykerRightHand, timeSquadRyker.address);
  
  await delay(10000) /// waiting 10 second.
  console.log('Ryker items minted');
  
  // Add item assets and mint them for Thaddeus
  await addItemAssetsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
  await delay(10000) /// waiting 10 second.
  await addItemAssetsThaddeusRightHand(itemsThaddeusRightHand, timeSquadThaddeus.address);
  console.log('Thaddeus item assets added');
  await delay(10000) /// waiting 10 second.
  
  await mintItemsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
  await delay(10000) /// waiting 10 second.
  await mintItemsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
  await delay(10000) /// waiting 10 second.
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