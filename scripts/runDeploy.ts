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
  mintItemsThaddeusRightHand,
  setEquippableAddressesLeftHand,
  setEquippableAddressesRightHand,
  setEquippableAddressesCap,
  setEquippableAddressesArmor,
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


  let tx01 = await registry.addExternalCollection(itemsAriaArmor.address, C.SQUAD_ITEM_METADATA_ARIA_ARMOR);
  let tx02 = await registry.addExternalCollection(itemsAriaCap.address, C.SQUAD_ITEM_METADATA_ARIA_CAP);
  let tx03 = await registry.addExternalCollection(itemsAriaLeftHand.address, C.SQUAD_ITEM_METADATA_ARIA_LEFT_HAND);
  let tx04 = await registry.addExternalCollection(itemsAriaRightHand.address, C.SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND);
  await Promise.all([
    tx01.wait(), tx02.wait(), tx03.wait(), tx04.wait()
  ]);
  console.log('Aria Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx05 = await registry.addExternalCollection(itemsLunaArmor.address, C.SQUAD_ITEM_METADATA_LUNA_ARMOR);
  let tx06 = await registry.addExternalCollection(itemsLunaCap.address, C.SQUAD_ITEM_METADATA_LUNA_CAP);
  let tx07 = await registry.addExternalCollection(itemsLunaLeftHand.address, C.SQUAD_ITEM_METADATA_LUNA_LEFT_HAND);
  let tx08 = await registry.addExternalCollection(itemsLunaRightHand.address, C.SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND);
  await Promise.all([
    tx05.wait(), tx06.wait(), tx07.wait(), tx08.wait()
  ]);
  console.log('Luna Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx09 = await registry.addExternalCollection(itemsRykerArmor.address, C.SQUAD_ITEM_METADATA_RYKER_ARMOR);
  let tx10 = await registry.addExternalCollection(itemsRykerCap.address, C.SQUAD_ITEM_METADATA_RYKER_CAP);
  let tx11 = await registry.addExternalCollection(itemsRykerLeftHand.address, C.SQUAD_ITEM_METADATA_RYKER_LEFT_HAND);
  let tx12 = await registry.addExternalCollection(itemsRykerRightHand.address, C.SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND);
  await Promise.all([
    tx09.wait(), tx10.wait(), tx11.wait(), tx12.wait()
  ]);
  console.log('Ryker Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  let tx13 = await registry.addExternalCollection(itemsThaddeusArmor.address, C.SQUAD_ITEM_METADATA_THADDEUS_ARMOR);
  let tx14 = await registry.addExternalCollection(itemsThaddeusCap.address, C.SQUAD_ITEM_METADATA_THADDEUS_CAP);
  let tx15 = await registry.addExternalCollection(itemsThaddeusLeftHand.address, C.SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND);
  let tx16 = await registry.addExternalCollection(itemsThaddeusRightHand.address, C.SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND);

  await Promise.all([
    tx13.wait(), tx14.wait(), tx15.wait(), tx16.wait()
  ]);
  console.log('Thaddeus Items Collections added to Singular Registry');
  await delay(10000) /// waiting 10 second.

  console.log('All item collections added to Singular Registry');



  // Configure catalogs with each type of item
await configureCatalogAria(
  timeSquadCatalogAria,
  itemsAriaArmor.address,
  itemsAriaCap.address,
  itemsAriaLeftHand.address,
  itemsAriaRightHand.address
);
console.log('Aria catalog configured.');

await configureCatalogLuna(
  timeSquadCatalogLuna,
  itemsLunaArmor.address,
  itemsLunaCap.address,
  itemsLunaLeftHand.address,
  itemsLunaRightHand.address
);
console.log('Luna catalog configured.');

await configureCatalogRyker(
  timeSquadCatalogRyker,
  itemsRykerArmor.address,
  itemsRykerCap.address,
  itemsRykerLeftHand.address,
  itemsRykerRightHand.address
);
console.log('Ryker catalog configured.');

await configureCatalogThaddeus(
  timeSquadCatalogThaddeus,
  itemsThaddeusArmor.address,
  itemsThaddeusCap.address,
  itemsThaddeusLeftHand.address,
  itemsThaddeusRightHand.address
);
console.log('Thaddeus catalog configured.');

await delay(10000); // Waiting 10 seconds after all catalog configurations.
console.log('All catalogs configured.');

  
  
  // Set equippable addresses
//per ARIA
await setEquippableAddressesLeftHand(timeSquadCatalogAria, [itemsAriaLeftHand.address]);
await setEquippableAddressesRightHand(timeSquadCatalogAria, [itemsAriaLeftHand.address]);
await setEquippableAddressesCap(timeSquadCatalogAria, [itemsAriaLeftHand.address]);
await setEquippableAddressesArmor(timeSquadCatalogAria, [itemsAriaLeftHand.address]);
await delay(10000) /// waiting 10 second.
//per Luna
await setEquippableAddressesLeftHand(timeSquadCatalogLuna, [itemsLunaLeftHand.address]);
await setEquippableAddressesRightHand(timeSquadCatalogLuna, [itemsLunaRightHand.address]);
await setEquippableAddressesCap(timeSquadCatalogLuna, [itemsLunaCap.address]);
await setEquippableAddressesArmor(timeSquadCatalogLuna, [itemsLunaArmor.address]);
await delay(10000) /// waiting 10 second.
await setEquippableAddressesLeftHand(timeSquadCatalogRyker, [itemsRykerLeftHand.address]);
await setEquippableAddressesRightHand(timeSquadCatalogRyker, [itemsRykerRightHand.address]);
await setEquippableAddressesCap(timeSquadCatalogRyker, [itemsRykerCap.address]);
await setEquippableAddressesArmor(timeSquadCatalogRyker, [itemsRykerArmor.address]);
await delay(10000) /// waiting 10 second.
await setEquippableAddressesLeftHand(timeSquadCatalogThaddeus, [itemsThaddeusLeftHand.address]);
await setEquippableAddressesRightHand(timeSquadCatalogThaddeus, [itemsThaddeusRightHand.address]);
await setEquippableAddressesCap(timeSquadCatalogThaddeus, [itemsThaddeusCap.address]);
await setEquippableAddressesArmor(timeSquadCatalogThaddeus, [itemsThaddeusArmor.address]);

  


console.log('Equippable addresses set for all catalogs');
  await delay(10000); /// waiting 10 second.


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
//---------------
/*
Deploying Contracts to moonbaseAlpha blockchain...
timeSquadAria deployed to 0xf1B170FD1CC20b05b0fda41a992Cdc5c84370812
timeSquadLuna deployed to 0x6b2C6e02F31CfE2138c4f448FF5Ee2100DfEc57b
timeSquadRyker deployed to 0x86f3C8b6DaA9690803b53977F35e7ec4C76088C9
timeSquadThaddeus deployed to 0x6138DBee47AfdCDCC80864a383c60e54388c74b2
parent Deployati
Catalog Aria deployed to 0x9283A021ff78c69CC4a22dB4780341d64Be6f152
Catalog Luna deployed to 0xE8c6ee10B161B1482D1eDaaFf71d44A8D3C87244
Catalog Ryker deployed to 0x0C28ED86cFC9A4C44be521EbC301A5d7F23f7ac4
Catalog Thaddeus deployed to 0x6Bf2Dc1B6711262709b099c9C89757285F257F28
catalog Deployati
Items Aria Armor deployed to 0x37fa2377439F860b653E1CD89891828162cDF110
Items Aria Cap deployed to 0x1631695AE3d5710c3b48b8CD6D8E6b043A49af7E
Items Aria Left Hand deployed to 0xA377E80E666a5320a4fFaD3ED21e8e8fAa1A804e
Items Aria Right Hand deployed to 0x613650Ae8e8166FB1956cDa532Af1a730315431e
Items Luna Armor deployed to 0xaA116315521AD643e702dA3c8EdC75Ab39e787B6
Items Luna Cap deployed to 0xe22524F569Ac38C951431D130cdb9eFD581390bF
Items Luna Left Hand deployed to 0x62B9f014c01Be2f24b158c8eB576CDc2DB0E10de
Items Luna Right Hand deployed to 0xc1786f0a7E4e015B200597AdEBDFEddE4A392a64
Items Ryker Armor deployed to 0x92D54268B8ff2E5231753A220A819ae55C48e8c7
Items Ryker Cap deployed to 0xa2297c93e3928f88C7439131Cba573AfC65E8058
Items Ryker Left Hand deployed to 0xB2DD3726Ea43c168675e1031C20209F92A05B84F
Items Ryker Right Hand deployed to 0xe4780Cb0Eb9276CAC74Fb0B5370B40657D815401
Items Thaddeus Armor deployed to 0x96C306655EC1B845dfc5ee474867689A25EcA7C1
Items Thaddeus Cap deployed to 0x3AE45952612F4Ba5477C91f514bd109CB186b7A7
Items Thaddeus Left Hand deployed to 0x31C6Cc152C4a5aFb6C1b672867d8E5ea14A9618a
Items Thaddeus Right Hand deployed to 0x82dF84299b9136e9cD4914C52aAEa7fabcE75DCa
items Deployati
setAutoAcceptCollection fatto
Parent Collections added to Singular Registry
Aria Items Collections added to Singular Registry
Luna Items Collections added to Singular Registry
Ryker Items Collections added to Singular Registry
Thaddeus Items Collections added to Singular Reg
*/
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
  await delay(1000) /// waiting 10 second.
  await addItemAssetsLunaCap(itemsLunaCap, timeSquadLuna.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsLunaLeftHand(itemsLunaLeftHand, timeSquadLuna.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsLunaRightHand(itemsLunaRightHand, timeSquadLuna.address);
  console.log('Luna item assets added');
  await delay(10000) /// waiting 10 second.

  await mintItemsLunaArmor(itemsLunaArmor, timeSquadLuna.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsLunaCap(itemsLunaCap, timeSquadLuna.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsLunaLeftHand(itemsLunaLeftHand, timeSquadLuna.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsLunaRightHand(itemsLunaRightHand, timeSquadLuna.address);
  console.log('Luna items minted');
  await delay(10000) /// waiting 10 second.
  
  // Add item assets and mint them for Ryker
  await addItemAssetsRykerArmor(itemsRykerArmor, timeSquadRyker.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsRykerCap(itemsRykerCap, timeSquadRyker.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsRykerLeftHand(itemsRykerLeftHand, timeSquadRyker.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsRykerRightHand(itemsRykerRightHand, timeSquadRyker.address);
  console.log('Ryker item assets added');
  await delay(10000) /// waiting 10 second.
  
  await mintItemsRykerArmor(itemsRykerArmor, timeSquadRyker.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsRykerCap(itemsRykerCap, timeSquadRyker.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsRykerLeftHand(itemsRykerLeftHand, timeSquadRyker.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsRykerRightHand(itemsRykerRightHand, timeSquadRyker.address);
  
  await delay(10000) /// waiting 10 second.
  console.log('Ryker items minted');
  
  // Add item assets and mint them for Thaddeus
  await addItemAssetsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
  await delay(1000) /// waiting 10 second.
  await addItemAssetsThaddeusRightHand(itemsThaddeusRightHand, timeSquadThaddeus.address);
  console.log('Thaddeus item assets added');
  await delay(10000) /// waiting 10 second.
  
  await mintItemsThaddeusArmor(itemsThaddeusArmor, timeSquadThaddeus.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsThaddeusCap(itemsThaddeusCap, timeSquadThaddeus.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsThaddeusLeftHand(itemsThaddeusLeftHand, timeSquadThaddeus.address);
  await delay(1000) /// waiting 10 second.
  await mintItemsThaddeusRightHand(itemsThaddeusRightHand, timeSquadThaddeus.address);
  console.log('Thaddeus items minted');
  console.log('FINE');

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