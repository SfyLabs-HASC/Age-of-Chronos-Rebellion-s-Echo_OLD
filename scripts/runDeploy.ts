import { ethers, network } from 'hardhat';
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

  // Log the deployed addresses
  console.log(`TimeSquad Aria deployed to ${timeSquadAria.address}`);
  console.log(`TimeSquad Luna deployed to ${timeSquadLuna.address}`);
  console.log(`TimeSquad Ryker deployed to ${timeSquadRyker.address}`);
  console.log(`TimeSquad Thaddeus deployed to ${timeSquadThaddeus.address}`);
  console.log(`TimeSquad Catalog Aria deployed to ${timeSquadCatalogAria.address}`);
  console.log(`TimeSquad Catalog Luna deployed to ${timeSquadCatalogLuna.address}`);
  console.log(`TimeSquad Catalog Ryker deployed to ${timeSquadCatalogRyker.address}`);
  console.log(`TimeSquad Catalog Thaddeus deployed to ${timeSquadCatalogThaddeus.address}`);
  // ... (Continue with the rest of the logs for the item contracts)

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
  // Repeat the same for Aria, Luna, Ryker, and Thaddeus with respective functions
  // Example for Aria:
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

  // Continue with similar blocks for Luna, Ryker, and Thaddeus
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});



/*

import { ethers, network } from 'hardhat';
import { getRegistry } from './getRegistry';
import * as C from './constants';
import { addItemAssets, configureCatalog, deployContracts, mintChunkies, mintItems } from './utils';

async function main() {
  console.log(`Deploying Chunkies to ${network.name} blockchain...`);
  const [deployer] = await ethers.getSigners();

  const { chunkies, items, catalog } = await deployContracts();

  console.log(`Chunky deployed to ${chunkies.address}`);
  console.log(`ChunkyItem deployed to ${items.address}`);
  console.log(`ChunkyCatalog deployed to ${catalog.address}`);

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