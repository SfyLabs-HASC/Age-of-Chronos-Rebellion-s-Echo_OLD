import { ethers, run } from 'hardhat';
import { BigNumber } from 'ethers';
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

import * as C from './constants';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

async function deployContracts(): Promise<{
  timeSquadRyker:TimeSquadRyker,
  timeSquadLuna:TimeSquadLuna,
  timeSquadAria:TimeSquadAria,
  timeSquadThaddeus:TimeSquadThaddeus,
  
  itemsAriaArmor: ItemsAriaArmor;
  itemsAriaCap: ItemsAriaCap;
  itemsAriaLeftHand: ItemsAriaLeftHand;
  itemsAriaRightHand: ItemsAriaRightHand;
  itemsLunaArmor: ItemsLunaArmor;
  itemsLunaCap: ItemsLunaCap;
  itemsLunaLeftHand: ItemsLunaLeftHand;
  itemsLunaRightHand: ItemsLunaRightHand;
  itemsRykerArmor: ItemsRykerArmor;
  itemsRykerCap: ItemsRykerCap;
  itemsRykerLeftHand: ItemsRykerLeftHand;
  itemsRykerRightHand: ItemsRykerRightHand;
  itemsThaddeusArmor: ItemsThaddeusArmor;
  itemsThaddeusCap: ItemsThaddeusCap;
  itemsThaddeusLeftHand: ItemsThaddeusLeftHand;
  itemsThaddeusRightHand: ItemsThaddeusRightHand;

  timeSquadCatalogAria: TimeSquadCatalogAria;
  timeSquadCatalogLuna: TimeSquadCatalogLuna;
  timeSquadCatalogRyker: TimeSquadCatalogRyker;
  timeSquadCatalogThaddeus: TimeSquadCatalogThaddeus;

}> {
  const deployerAddress = (await ethers.getSigners())[0].address;
  
  const timeSquadAriaFactory = await ethers.getContractFactory('TimeSquadAria');
  const timeSquadLunaFactory = await ethers.getContractFactory('TimeSquadLuna');
  const timeSquadRykerFactory = await ethers.getContractFactory('TimeSquadRyker');
  const timeSquadThaddeusFactory = await ethers.getContractFactory('TimeSquadThaddeus');

  const itemsAriaArmorFactory = await ethers.getContractFactory('ItemsAriaArmor');
  const itemsAriaCapFactory = await ethers.getContractFactory('ItemsAriaCap');
  const itemsAriaLeftHandFactory = await ethers.getContractFactory('ItemsAriaLeftHand');
  const itemsAriaRightHandFactory = await ethers.getContractFactory('ItemsAriaRightHand');
  const itemsLunaArmorFactory = await ethers.getContractFactory('ItemsLunaArmor');
  const itemsLunaCapFactory = await ethers.getContractFactory('ItemsLunaCap');
  const itemsLunaLeftHandFactory = await ethers.getContractFactory('ItemsLunaLeftHand');
  const itemsLunaRightHandFactory = await ethers.getContractFactory('ItemsLunaRightHand');
  const itemsRykerArmorFactory = await ethers.getContractFactory('ItemsRykerArmor');
  const itemsRykerCapFactory = await ethers.getContractFactory('ItemsRykerCap');
  const itemsRykerLeftHandFactory = await ethers.getContractFactory('ItemsRykerLeftHand');
  const itemsRykerRightHandFactory = await ethers.getContractFactory('ItemsRykerRightHand');
  const itemsThaddeusArmorFactory = await ethers.getContractFactory('ItemsThaddeusArmor');
  const itemsThaddeusCapFactory = await ethers.getContractFactory('ItemsThaddeusCap');
  const itemsThaddeusLeftHandFactory = await ethers.getContractFactory('ItemsThaddeusLeftHand');
  const itemsThaddeusRightHandFactory = await ethers.getContractFactory('ItemsThaddeusRightHand');
  
  const timeSquadCatalogAriaFactory = await ethers.getContractFactory('TimeSquadCatalogAria');
  const timeSquadCatalogLunaFactory = await ethers.getContractFactory('TimeSquadCatalogLuna');
  const timeSquadCatalogRykerFactory = await ethers.getContractFactory('TimeSquadCatalogRyker');
  const timeSquadCatalogThaddeusFactory = await ethers.getContractFactory('TimeSquadCatalogThaddeus');
  
  const delay = (ms: number): Promise<void> => {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  const ariaSquadArgs = [
    C.SQUAD_METADATA_ARIA,
    BigNumber.from(250),
    deployerAddress,
    500, // 5%
  ] as const;
  const lunaSquadArgs = [
    C.SQUAD_METADATA_LUNA,
    BigNumber.from(250),
    deployerAddress,
    500, // 5%
  ] as const;
  const rykerSquadArgs = [
    C.SQUAD_METADATA_RYKER,
    BigNumber.from(250),
    deployerAddress,
    500, // 5%
  ] as const;
  const thaddeusSquadArgs = [
    C.SQUAD_METADATA_THADDEUS,
    BigNumber.from(250),
    deployerAddress,
    500, // 5%
  ] as const;

  const timeSquadAria: TimeSquadAria = await timeSquadAriaFactory.deploy(...ariaSquadArgs);
  await timeSquadAria.deployed();
  
  const timeSquadLuna: TimeSquadLuna = await timeSquadLunaFactory.deploy(...lunaSquadArgs);
  await timeSquadLuna.deployed();
  
  const timeSquadRyker: TimeSquadRyker = await timeSquadRykerFactory.deploy(...rykerSquadArgs);
  await timeSquadRyker.deployed();
  
  const timeSquadThaddeus: TimeSquadThaddeus = await timeSquadThaddeusFactory.deploy(...thaddeusSquadArgs);
  await timeSquadThaddeus.deployed();

  console.log(`timeSquadAria deployed to ${timeSquadAria.address}`);
  console.log(`timeSquadLuna deployed to ${timeSquadLuna.address}`);
  console.log(`timeSquadRyker deployed to ${timeSquadRyker.address}`);
  console.log(`timeSquadThaddeus deployed to ${timeSquadThaddeus.address}`);
console.log("parent Deployati")
  // Deployment script for Catalog Contracts
  const catalogRykerArgs = [C.SQUAD_CATALOG_RYKER_METADATA, 'image/*'] as const;
  const catalogLunaArgs = [C.SQUAD_CATALOG_LUNA_METADATA, 'image/*'] as const;
  const catalogAriaArgs = [C.SQUAD_CATALOG_ARIA_METADATA, 'image/*'] as const;
  const catalogThaddeusArgs = [C.SQUAD_CATALOG_THADDEUS_METADATA, 'image/*'] as const;


  const timeSquadCatalogAria = await timeSquadCatalogAriaFactory.deploy(...catalogAriaArgs);
  await timeSquadCatalogAria.deployed();

  const timeSquadCatalogLuna = await timeSquadCatalogLunaFactory.deploy(...catalogLunaArgs);
  await timeSquadCatalogLuna.deployed();

  const timeSquadCatalogRyker = await timeSquadCatalogRykerFactory.deploy(...catalogRykerArgs);
  await timeSquadCatalogRyker.deployed();

  const timeSquadCatalogThaddeus = await timeSquadCatalogThaddeusFactory.deploy(...catalogThaddeusArgs);
  await timeSquadCatalogThaddeus.deployed();
  
  
  console.log(`Catalog Aria deployed to ${timeSquadCatalogAria.address}`);
  console.log(`Catalog Luna deployed to ${timeSquadCatalogLuna.address}`);
  console.log(`Catalog Ryker deployed to ${timeSquadCatalogRyker.address}`);
  console.log(`Catalog Thaddeus deployed to ${timeSquadCatalogThaddeus.address}`);
  console.log("catalog Deployati");

  await delay(10000) /// waiting 10 second.
  // Deployment script for Item Contracts

  /*
  SQUAD_ITEM_METADATA_ARIA_ARMOR,
  SQUAD_ITEM_METADATA_ARIA_CAP,
  SQUAD_ITEM_METADATA_ARIA_LEFT_HAND,
  SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND,
  SQUAD_ITEM_METADATA_LUNA_ARMOR,
  SQUAD_ITEM_METADATA_LUNA_CAP,
  SQUAD_ITEM_METADATA_LUNA_LEFT_HAND,
  SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND,
  SQUAD_ITEM_METADATA_RYKER_ARMOR,
  SQUAD_ITEM_METADATA_RYKER_CAP,
  SQUAD_ITEM_METADATA_RYKER_LEFT_HAND,
  SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND,
  SQUAD_ITEM_METADATA_THADDEUS_ARMOR,
  SQUAD_ITEM_METADATA_THADDEUS_CAP,
  SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND,
  SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND
  */

  const itemArgsAriaArmor = [
    C.SQUAD_ITEM_METADATA_ARIA_ARMOR,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsAriaCap = [
    C.SQUAD_ITEM_METADATA_ARIA_CAP,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsAriaLeftHand = [
    C.SQUAD_ITEM_METADATA_ARIA_LEFT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsAriaRightHand = [
    C.SQUAD_ITEM_METADATA_ARIA_RIGHT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsLunaArmor = [
    C.SQUAD_ITEM_METADATA_LUNA_ARMOR,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsLunaCap = [
    C.SQUAD_ITEM_METADATA_LUNA_CAP,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsLunaLeftHand = [
    C.SQUAD_ITEM_METADATA_LUNA_LEFT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsLunaRightHand = [
    C.SQUAD_ITEM_METADATA_LUNA_RIGHT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsRykerArmor = [
    C.SQUAD_ITEM_METADATA_RYKER_ARMOR,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsRykerCap = [
    C.SQUAD_ITEM_METADATA_RYKER_CAP,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsRykerLeftHand = [
    C.SQUAD_ITEM_METADATA_RYKER_LEFT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsRykerRightHand = [
    C.SQUAD_ITEM_METADATA_RYKER_RIGHT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsThaddeusArmor = [
    C.SQUAD_ITEM_METADATA_THADDEUS_ARMOR,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsThaddeusCap = [
    C.SQUAD_ITEM_METADATA_THADDEUS_CAP,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsThaddeusLeftHand = [
    C.SQUAD_ITEM_METADATA_THADDEUS_LEFT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  
  const itemArgsThaddeusRightHand = [
    C.SQUAD_ITEM_METADATA_THADDEUS_RIGHT_HAND,
    BigNumber.from(200),
    deployerAddress,
    500
  ] as const;
  

  const itemsAriaArmor = await itemsAriaArmorFactory.deploy(...itemArgsAriaArmor);
await itemsAriaArmor.deployed();

const itemsAriaCap = await itemsAriaCapFactory.deploy(...itemArgsAriaCap);
await itemsAriaCap.deployed();

const itemsAriaLeftHand = await itemsAriaLeftHandFactory.deploy(...itemArgsAriaLeftHand);
await itemsAriaLeftHand.deployed();

const itemsAriaRightHand = await itemsAriaRightHandFactory.deploy(...itemArgsAriaRightHand);
await itemsAriaRightHand.deployed();

const itemsLunaArmor = await itemsLunaArmorFactory.deploy(...itemArgsLunaArmor);
await itemsLunaArmor.deployed();

const itemsLunaCap = await itemsLunaCapFactory.deploy(...itemArgsLunaCap);
await itemsLunaCap.deployed();

const itemsLunaLeftHand = await itemsLunaLeftHandFactory.deploy(...itemArgsLunaLeftHand);
await itemsLunaLeftHand.deployed();

const itemsLunaRightHand = await itemsLunaRightHandFactory.deploy(...itemArgsLunaRightHand);
await itemsLunaRightHand.deployed();

const itemsRykerArmor = await itemsRykerArmorFactory.deploy(...itemArgsRykerArmor);
await itemsRykerArmor.deployed();

const itemsRykerCap = await itemsRykerCapFactory.deploy(...itemArgsRykerCap);
await itemsRykerCap.deployed();

const itemsRykerLeftHand = await itemsRykerLeftHandFactory.deploy(...itemArgsRykerLeftHand);
await itemsRykerLeftHand.deployed();

const itemsRykerRightHand = await itemsRykerRightHandFactory.deploy(...itemArgsRykerRightHand);
await itemsRykerRightHand.deployed();

const itemsThaddeusArmor = await itemsThaddeusArmorFactory.deploy(...itemArgsThaddeusArmor);
await itemsThaddeusArmor.deployed();

const itemsThaddeusCap = await itemsThaddeusCapFactory.deploy(...itemArgsThaddeusCap);
await itemsThaddeusCap.deployed();

const itemsThaddeusLeftHand = await itemsThaddeusLeftHandFactory.deploy(...itemArgsThaddeusLeftHand);
await itemsThaddeusLeftHand.deployed();

const itemsThaddeusRightHand = await itemsThaddeusRightHandFactory.deploy(...itemArgsThaddeusRightHand);
await itemsThaddeusRightHand.deployed();


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
  console.log("items Deployati")
await delay(10000) /// waiting 10 second.
  // So holders do not need to accept each item
// Aria
await timeSquadAria.setAutoAcceptCollection(itemsAriaArmor.address,true);
await timeSquadAria.setAutoAcceptCollection(itemsAriaCap.address,true);
await timeSquadAria.setAutoAcceptCollection(itemsAriaLeftHand.address,true);
await timeSquadAria.setAutoAcceptCollection(itemsAriaRightHand.address,true);
await delay(10000) /// waiting 10 second.
// Luna
await timeSquadLuna.setAutoAcceptCollection(itemsLunaArmor.address,true);
await timeSquadLuna.setAutoAcceptCollection(itemsLunaCap.address,true);
await timeSquadLuna.setAutoAcceptCollection(itemsLunaLeftHand.address,true);
await timeSquadLuna.setAutoAcceptCollection(itemsLunaRightHand.address,true);
await delay(10000) /// waiting 10 second.
// Ryker
await timeSquadRyker.setAutoAcceptCollection(itemsRykerArmor.address,true);
await timeSquadRyker.setAutoAcceptCollection(itemsRykerCap.address,true);
await timeSquadRyker.setAutoAcceptCollection(itemsRykerLeftHand.address,true);
await timeSquadRyker.setAutoAcceptCollection(itemsRykerRightHand.address,true);
await delay(10000) /// waiting 10 second.
// Thaddeus
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusArmor.address,true);
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusCap.address,true);
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusLeftHand.address,true);
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusRightHand.address,true);

console.log("setAutoAcceptCollection fatto")
await delay(10000) /// waiting 10 second.
/*
  NEL TESTING NON METTERE QUESTA PARTE!!!!
  const chainId = (await ethers.provider.getNetwork()).chainId;
  if (chainId !== 31337) {
    // Skip verification on local chain
// Verification for timeSquadAria
await run('verify:verify', {
  address: timeSquadAria.address,
  constructorArguments: squadArgs,
});

// Verification for timeSquadLuna
await run('verify:verify', {
  address: timeSquadLuna.address,
  constructorArguments: squadArgs,
});

// Verification for timeSquadRyker
await run('verify:verify', {
  address: timeSquadRyker.address,
  constructorArguments: squadArgs,
});

// Verification for timeSquadThaddeus
await run('verify:verify', {
  address: timeSquadThaddeus.address,
  constructorArguments: squadArgs,
});

// Verification for Aria items
await run('verify:verify', {
  address: itemsAriaArmor.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsAriaCap.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsAriaLeftHand.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsAriaRightHand.address,
  constructorArguments: itemArgs,
});

// Verification for Luna items
await run('verify:verify', {
  address: itemsLunaArmor.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsLunaCap.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsLunaLeftHand.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsLunaRightHand.address,
  constructorArguments: itemArgs,
});

// Verification for Ryker items
await run('verify:verify', {
  address: itemsRykerArmor.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsRykerCap.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsRykerLeftHand.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsRykerRightHand.address,
  constructorArguments: itemArgs,
});

// Verification for Thaddeus items
await run('verify:verify', {
  address: itemsThaddeusArmor.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsThaddeusCap.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsThaddeusLeftHand.address,
  constructorArguments: itemArgs,
});
await run('verify:verify', {
  address: itemsThaddeusRightHand.address,
  constructorArguments: itemArgs,
});

// Verification for timeSquadCatalogAria
await run('verify:verify', {
  address: timeSquadCatalogAria.address,
  contract: 'contracts/TimeSquadCatalogAria.sol:TimeSquadCatalogAria',
  constructorArguments: catalogAriaArgs,
});

// Verification for timeSquadCatalogLuna
await run('verify:verify', {
  address: timeSquadCatalogLuna.address,
  contract: 'contracts/TimeSquadCatalogLuna.sol:TimeSquadCatalogLuna',
  constructorArguments: catalogLunaArgs,
});

// Verification for timeSquadCatalogRyker
await run('verify:verify', {
  address: timeSquadCatalogRyker.address,
  contract: 'contracts/TimeSquadCatalogRyker.sol:TimeSquadCatalogRyker',
  constructorArguments: catalogRykerArgs,
});

// Verification for timeSquadCatalogThaddeus
await run('verify:verify', {
  address: timeSquadCatalogThaddeus.address,
  contract: 'contracts/TimeSquadCatalogThaddeus.sol:TimeSquadCatalogThaddeus',
  constructorArguments: catalogThaddeusArgs,
});

  }
*/
  return {
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
  };
  
}

// Configure TimeSquadCatalogAria
async function configureCatalogAria(catalog: TimeSquadCatalogAria, itemAddress: string) {
  // Slots
  let tx1:any = await catalog.addPartList([
    {
      partId: C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_LEFT_HAND_ITEMS,
        equippable: [itemAddress],
        metadataURI: `${C.SQUAD_ITEM_LEFT_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_RIGHT_HAND_ITEMS,
        equippable: [itemAddress],
        metadataURI: `${C.SQUAD_ITEM_RIGHT_SLOT_METADATA}`,
      },
    },

    {
      partId: C.SQUAD_CAP_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_CAP_ITEMS,
        equippable: [itemAddress],
        metadataURI: `${C.SQUAD_ITEM_CAP_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_ARMOR_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_ARMOR_ITEMS,
        equippable: [itemAddress],
        metadataURI: `${C.SQUAD_ITEM_ARMOR_SLOT_METADATA}`,
      },
    },
    
  ]);
  await Promise.all([tx1.wait()]);
}

// Configure TimeSquadCatalogLuna
async function configureCatalogLuna(catalog: TimeSquadCatalogLuna, itemsAddress: string) {
  let tx1 = await catalog.addPartList([
    {
      partId: C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_LEFT_HAND_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_LEFT_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_RIGHT_HAND_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_RIGHT_SLOT_METADATA}`,
      },
    },

    {
      partId: C.SQUAD_CAP_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_CAP_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_CAP_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_ARMOR_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_ARMOR_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_ARMOR_SLOT_METADATA}`,
      },
    },
  ]);
  await Promise.all([tx1.wait()]);
}

// Configure TimeSquadCatalogRyker
async function configureCatalogRyker(catalog: TimeSquadCatalogRyker, itemsAddress: string) {
  let tx1 = await catalog.addPartList([
    {
      partId: C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_LEFT_HAND_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_LEFT_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_RIGHT_HAND_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_RIGHT_SLOT_METADATA}`,
      },
    },

    {
      partId: C.SQUAD_CAP_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_CAP_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_CAP_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_ARMOR_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_ARMOR_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_ARMOR_SLOT_METADATA}`,
      },
    },
  ]);
  await Promise.all([tx1.wait()]);
}

// Configure TimeSquadCatalogThaddeus
async function configureCatalogThaddeus(catalog: TimeSquadCatalogThaddeus, itemsAddress: string) {
  let tx1 = await catalog.addPartList([
    {
      partId: C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_LEFT_HAND_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_LEFT_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_RIGHT_HAND_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_RIGHT_SLOT_METADATA}`,
      },
    },

    {
      partId: C.SQUAD_CAP_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_CAP_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_CAP_SLOT_METADATA}`,
      },
    },
    {
      partId: C.SQUAD_ARMOR_SLOT_PART_ID,
      part: {
        itemType: C.PART_TYPE_SLOT,
        z: C.Z_INDEX_ARMOR_ITEMS,
        equippable: [itemsAddress],
        metadataURI: `${C.SQUAD_ITEM_ARMOR_SLOT_METADATA}`,
      },
    },
  ]);
  await Promise.all([tx1.wait()]);
}


//ATTENZIONE QUESTE VANNO SUL SITO WEB! TODO
async function mintParentSquadRyker(timeSquadRyker: TimeSquadRyker, timeSquadCatalogRyker: string, mintTo: SignerWithAddress) {
  let txRyker = await timeSquadRyker.mintWithEquippableAsset(
    mintTo.address, // To
    `${C.BASE_IPFS_URI}/timeSquad/full/Ryker.json`, // TokenURI
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, // Equippable group
    timeSquadCatalogRyker, // Catalog address
    `${C.BASE_IPFS_URI}/timeSquad/full/Ryker.json`, // Metadata URI, we are using the same as tokenURI. We could use a fallback one for all.
    [
      // slots part ids:
      C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      C.SQUAD_CAP_SLOT_PART_ID,
      C.SQUAD_ARMOR_SLOT_PART_ID,
    ],
  );
  await txRyker.wait();
}

// Per TimeSquadAria
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

// Per TimeSquadLuna
async function mintParentSquadLuna(timeSquadLuna: TimeSquadLuna, timeSquadCatalogLuna: string, mintTo: SignerWithAddress) {
  let txLuna = await timeSquadLuna.mintWithEquippableAsset(
    mintTo.address,
    `${C.BASE_IPFS_URI}/timeSquad/full/Luna.json`, 
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
    timeSquadCatalogLuna,
    `${C.BASE_IPFS_URI}/timeSquad/full/Luna.json`, 
    [
      C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      C.SQUAD_CAP_SLOT_PART_ID,
      C.SQUAD_ARMOR_SLOT_PART_ID
    ],
  );
  await txLuna.wait();
}

// Per TimeSquadThaddeus
async function mintParentSquadThaddeus(timeSquadThaddeus: TimeSquadThaddeus, timeSquadCatalogThaddeus: string, mintTo: SignerWithAddress) {
  let txThaddeus = await timeSquadThaddeus.mintWithEquippableAsset(
    mintTo.address,
    `${C.BASE_IPFS_URI}/timeSquad/full/Thaddeus.json`, 
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
    timeSquadCatalogThaddeus,
    `${C.BASE_IPFS_URI}/timeSquad/full/Thaddeus.json`, 
    [
      C.SQUAD_LEFT_HAND_SLOT_PART_ID,
      C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
      C.SQUAD_CAP_SLOT_PART_ID,
      C.SQUAD_ARMOR_SLOT_PART_ID
    ],
  );
  await txThaddeus.wait();
}


async function addItemAssetsAriaArmor(items: ItemsAriaArmor, TimeSquadAriaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
 `${C.BASE_IPFS_URI}/items/aria/01_armor_primary_asset.json`,  //THUMB false
 `${C.BASE_IPFS_URI}/items/aria/01_armor_secondary_asset.json`,  //second asset (todo dovresti cambiare il metadata) THUMB true
  );
  await tx.wait();

  // WARNING: This is necessary to show the intention of groups of assets to be equipped into specific collection and slots. This is the reason we have equippable group ids.
  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    TimeSquadAriaAddress,
    C.SQUAD_ARMOR_SLOT_PART_ID,
  );
}

// For Aria Cap
async function addItemAssetsAriaCap(items: ItemsAriaCap, TimeSquadAriaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    `${C.BASE_IPFS_URI}/items/aria/02_cap_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/aria/02_cap_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    TimeSquadAriaAddress,
    C.SQUAD_CAP_SLOT_PART_ID,
  );
}

// For Aria Left Hand
async function addItemAssetsAriaLeftHand(items: ItemsAriaLeftHand, TimeSquadAriaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    `${C.BASE_IPFS_URI}/items/aria/03_left_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/aria/03_left_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    TimeSquadAriaAddress,
    C.SQUAD_LEFT_HAND_SLOT_PART_ID,
  );
}

// For Aria Right Hand
async function addItemAssetsAriaRightHand(items: ItemsAriaRightHand, TimeSquadAriaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    `${C.BASE_IPFS_URI}/items/aria/04_right_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/aria/04_right_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    TimeSquadAriaAddress,
    C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
  );
}

// For Ryker Armor
async function addItemAssetsRykerArmor(items: ItemsRykerArmor, TimeSquadRykerAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    `${C.BASE_IPFS_URI}/items/ryker/01_armor_primary_asset.json`,  
    `${C.BASE_IPFS_URI}/items/ryker/01_armor_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    TimeSquadRykerAddress,
    C.SQUAD_ARMOR_SLOT_PART_ID,
  );
}

// For Ryker Cap
async function addItemAssetsRykerCap(items: ItemsRykerCap, TimeSquadRykerAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    `${C.BASE_IPFS_URI}/items/ryker/02_cap_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/ryker/02_cap_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    TimeSquadRykerAddress,
    C.SQUAD_CAP_SLOT_PART_ID,
  );
}

// For Ryker Left Hand
async function addItemAssetsRykerLeftHand(items: ItemsRykerLeftHand, TimeSquadRykerAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    `${C.BASE_IPFS_URI}/items/ryker/03_left_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/ryker/03_left_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    TimeSquadRykerAddress,
    C.SQUAD_LEFT_HAND_SLOT_PART_ID,
  );
}

// For Ryker Right Hand
async function addItemAssetsRykerRightHand(items: ItemsRykerRightHand, TimeSquadRykerAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    `${C.BASE_IPFS_URI}/items/ryker/04_right_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/ryker/04_right_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    TimeSquadRykerAddress,
    C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
  );
}

// For Luna Armor
async function addItemAssetsLunaArmor(items: ItemsLunaArmor, TimeSquadLunaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    `${C.BASE_IPFS_URI}/items/luna/01_armor_primary_asset.json`,  
    `${C.BASE_IPFS_URI}/items/luna/01_armor_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    TimeSquadLunaAddress,
    C.SQUAD_ARMOR_SLOT_PART_ID,
  );
}

// For Luna Cap
async function addItemAssetsLunaCap(items: ItemsLunaCap, TimeSquadLunaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    `${C.BASE_IPFS_URI}/items/luna/02_cap_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/luna/02_cap_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    TimeSquadLunaAddress,
    C.SQUAD_CAP_SLOT_PART_ID,
  );
}

// For Luna Left Hand
async function addItemAssetsLunaLeftHand(items: ItemsLunaLeftHand, TimeSquadLunaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    `${C.BASE_IPFS_URI}/items/luna/03_left_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/luna/03_left_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    TimeSquadLunaAddress,
    C.SQUAD_LEFT_HAND_SLOT_PART_ID,
  );
}

// For Luna Right Hand
async function addItemAssetsLunaRightHand(items: ItemsLunaRightHand, TimeSquadLunaAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    `${C.BASE_IPFS_URI}/items/luna/04_right_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/luna/04_right_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    TimeSquadLunaAddress,
    C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
  );
}

// For Thaddeus Armor
async function addItemAssetsThaddeusArmor(items: ItemsThaddeusArmor, TimeSquadThaddeusAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    `${C.BASE_IPFS_URI}/items/thaddeus/01_armor_primary_asset.json`,  
    `${C.BASE_IPFS_URI}/items/thaddeus/01_armor_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
    TimeSquadThaddeusAddress,
    C.SQUAD_ARMOR_SLOT_PART_ID,
  );
}

// For Thaddeus Cap
async function addItemAssetsThaddeusCap(items: ItemsThaddeusCap, TimeSquadThaddeusAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    `${C.BASE_IPFS_URI}/items/thaddeus/02_cap_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/thaddeus/02_cap_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_CAP,
    TimeSquadThaddeusAddress,
    C.SQUAD_CAP_SLOT_PART_ID,
  );
}

// For Thaddeus Left Hand
async function addItemAssetsThaddeusLeftHand(items: ItemsThaddeusLeftHand, TimeSquadThaddeusAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    `${C.BASE_IPFS_URI}/items/thaddeus/03_left_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/thaddeus/03_left_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_LEFT_HAND,
    TimeSquadThaddeusAddress,
    C.SQUAD_LEFT_HAND_SLOT_PART_ID,
  );
}

// For Thaddeus Right Hand
async function addItemAssetsThaddeusRightHand(items: ItemsThaddeusRightHand, TimeSquadThaddeusAddress: string) {
  let tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    `${C.BASE_IPFS_URI}/items/thaddeus/04_right_hand_primary_asset.json`,
    `${C.BASE_IPFS_URI}/items/thaddeus/04_right_hand_secondary_asset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    TimeSquadThaddeusAddress,
    C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
  );
}

/*-----------------------*/
async function mintItemsAriaArmor(itemsAriaArmor: ItemsAriaArmor, TimeSquadAriaAddress: string) {
  const armorFirstAssetId = 1;
  const armorSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  // Sending a armor NFT to the first parent squad, with 2 assets
  let tx = await itemsAriaArmor.nestMintWithAssets(
    TimeSquadAriaAddress, // To
    1, // destinationId il primo nft parent
    `${C.BASE_IPFS_URI}/items/aria/01_armor_primary_asset.json`, // TokenURI del child nft,
    [armorFirstAssetId, armorSecondAssetId], // Assets
  );
  await tx.wait();
}

// For Aria Cap
async function mintItemsAriaCap(itemsAriaCap: ItemsAriaCap, TimeSquadAriaAddress: string) {
  const capFirstAssetId = 1;
  const capSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsAriaCap.nestMintWithAssets(
    TimeSquadAriaAddress, // To
    1, // destinationId of the first parent NFT
    `${C.BASE_IPFS_URI}/items/aria/02_cap_primary_asset.json`, // TokenURI of the child NFT,
    [capFirstAssetId, capSecondAssetId], // Assets
  );
  await tx.wait();
}

// For Aria Left Hand
async function mintItemsAriaLeftHand(itemsAriaLeftHand: ItemsAriaLeftHand, TimeSquadAriaAddress: string) {
  const leftHandFirstAssetId = 1;
  const leftHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsAriaLeftHand.nestMintWithAssets(
    TimeSquadAriaAddress, // To
    1, // destinationId of the first parent NFT
    `${C.BASE_IPFS_URI}/items/aria/03_left_hand_primary_asset.json`, // TokenURI of the child NFT,
    [leftHandFirstAssetId, leftHandSecondAssetId], // Assets
  );
  await tx.wait();
}

// For Aria Right Hand
async function mintItemsAriaRightHand(itemsAriaRightHand: ItemsAriaRightHand, TimeSquadAriaAddress: string) {
  const rightHandFirstAssetId = 1;
  const rightHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsAriaRightHand.nestMintWithAssets(
    TimeSquadAriaAddress, // To
    1, // destinationId of the first parent NFT
    `${C.BASE_IPFS_URI}/items/aria/04_right_hand_primary_asset.json`, // TokenURI of the child NFT,
    [rightHandFirstAssetId, rightHandSecondAssetId], // Assets
  );
  await tx.wait();
}


// For Luna Armor
async function mintItemsLunaArmor(itemsLunaArmor: ItemsLunaArmor, TimeSquadLunaAddress: string) {
  const armorFirstAssetId = 1;
  const armorSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsLunaArmor.nestMintWithAssets(
    TimeSquadLunaAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/luna/01_armor_primary_asset.json`,
    [armorFirstAssetId, armorSecondAssetId],
  );
  await tx.wait();
}

// For Luna Cap
async function mintItemsLunaCap(itemsLunaCap: ItemsLunaCap, TimeSquadLunaAddress: string) {
  const capFirstAssetId = 1;
  const capSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsLunaCap.nestMintWithAssets(
    TimeSquadLunaAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/luna/02_cap_primary_asset.json`,
    [capFirstAssetId, capSecondAssetId],
  );
  await tx.wait();
}

// For Luna Left Hand
async function mintItemsLunaLeftHand(itemsLunaLeftHand: ItemsLunaLeftHand, TimeSquadLunaAddress: string) {
  const leftHandFirstAssetId = 1;
  const leftHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsLunaLeftHand.nestMintWithAssets(
    TimeSquadLunaAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/luna/03_left_hand_primary_asset.json`, 
    [leftHandFirstAssetId, leftHandSecondAssetId],
  );
  await tx.wait();
}

// For Luna Right Hand
async function mintItemsLunaRightHand(itemsLunaRightHand: ItemsLunaRightHand, TimeSquadLunaAddress: string) {
  const rightHandFirstAssetId = 1;
  const rightHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsLunaRightHand.nestMintWithAssets(
    TimeSquadLunaAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/luna/04_right_hand_primary_asset.json`,
    [rightHandFirstAssetId, rightHandSecondAssetId],
  );
  await tx.wait();
}



// For Ryker Armor
async function mintItemsRykerArmor(itemsRykerArmor: ItemsRykerArmor, TimeSquadRykerAddress: string) {
  const armorFirstAssetId = 1;
  const armorSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsRykerArmor.nestMintWithAssets(
    TimeSquadRykerAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/ryker/01_armor_primary_asset.json`,
    [armorFirstAssetId, armorSecondAssetId],
  );
  await tx.wait();
}

// For Ryker Cap
async function mintItemsRykerCap(itemsRykerCap: ItemsRykerCap, TimeSquadRykerAddress: string) {
  const capFirstAssetId = 1;
  const capSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsRykerCap.nestMintWithAssets(
    TimeSquadRykerAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/ryker/02_cap_primary_asset.json`,
    [capFirstAssetId, capSecondAssetId],
  );
  await tx.wait();
}

// For Ryker Left Hand
async function mintItemsRykerLeftHand(itemsRykerLeftHand: ItemsRykerLeftHand, TimeSquadRykerAddress: string) {
  const leftHandFirstAssetId = 1;
  const leftHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsRykerLeftHand.nestMintWithAssets(
    TimeSquadRykerAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/ryker/03_left_hand_primary_asset.json`,
    [leftHandFirstAssetId, leftHandSecondAssetId],
  );
  await tx.wait();
}

// For Ryker Right Hand
async function mintItemsRykerRightHand(itemsRykerRightHand: ItemsRykerRightHand, TimeSquadRykerAddress: string) {
  const rightHandFirstAssetId = 1;
  const rightHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsRykerRightHand.nestMintWithAssets(
    TimeSquadRykerAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/ryker/04_right_hand_primary_asset.json`,
    [rightHandFirstAssetId, rightHandSecondAssetId],
  );
  await tx.wait();
}





// For Thaddeus Armor
async function mintItemsThaddeusArmor(itemsThaddeusArmor: ItemsThaddeusArmor, TimeSquadThaddeusAddress: string) {
  const armorFirstAssetId = 1;
  const armorSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsThaddeusArmor.nestMintWithAssets(
    TimeSquadThaddeusAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/thaddeus/01_armor_primary_asset.json`,
    [armorFirstAssetId, armorSecondAssetId],
  );
  await tx.wait();
}

// For Thaddeus Cap
async function mintItemsThaddeusCap(itemsThaddeusCap: ItemsThaddeusCap, TimeSquadThaddeusAddress: string) {
  const capFirstAssetId = 1;
  const capSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsThaddeusCap.nestMintWithAssets(
    TimeSquadThaddeusAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/thaddeus/02_cap_primary_asset.json`,
    [capFirstAssetId, capSecondAssetId],
  );
  await tx.wait();
}

// For Thaddeus Left Hand
async function mintItemsThaddeusLeftHand(itemsThaddeusLeftHand: ItemsThaddeusLeftHand, TimeSquadThaddeusAddress: string) {
  const leftHandFirstAssetId = 1;
  const leftHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsThaddeusLeftHand.nestMintWithAssets(
    TimeSquadThaddeusAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/thaddeus/03_left_hand_primary_asset.json`,
    [leftHandFirstAssetId, leftHandSecondAssetId],
  );
  await tx.wait();
}

// For Thaddeus Right Hand
async function mintItemsThaddeusRightHand(itemsThaddeusRightHand: ItemsThaddeusRightHand, TimeSquadThaddeusAddress: string) {
  const rightHandFirstAssetId = 1;
  const rightHandSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  let tx = await itemsThaddeusRightHand.nestMintWithAssets(
    TimeSquadThaddeusAddress, 
    1, 
    `${C.BASE_IPFS_URI}/items/thaddeus/04_right_hand_primary_asset.json`,
    [rightHandFirstAssetId, rightHandSecondAssetId],
  );
  await tx.wait();
}


export {
  deployContracts,
  configureCatalogAria,
  configureCatalogLuna,
  configureCatalogRyker,
  configureCatalogThaddeus,
  mintParentSquadRyker,
  mintParentSquadAria,
  mintParentSquadLuna,
  mintParentSquadThaddeus,
  addItemAssetsAriaArmor,
  addItemAssetsAriaCap,
  addItemAssetsAriaLeftHand,
  addItemAssetsAriaRightHand,
  addItemAssetsRykerArmor,
  addItemAssetsRykerCap,
  addItemAssetsRykerLeftHand,
  addItemAssetsRykerRightHand,
  addItemAssetsLunaArmor,
  addItemAssetsLunaCap,
  addItemAssetsLunaLeftHand,
  addItemAssetsLunaRightHand,
  addItemAssetsThaddeusArmor,
  addItemAssetsThaddeusCap,
  addItemAssetsThaddeusLeftHand,
  addItemAssetsThaddeusRightHand,
  mintItemsAriaArmor,
  mintItemsAriaLeftHand,
  mintItemsAriaRightHand,
  mintItemsAriaCap,
  mintItemsLunaArmor,
  mintItemsLunaLeftHand,
  mintItemsLunaRightHand,
  mintItemsLunaCap,
  mintItemsRykerArmor,
  mintItemsRykerLeftHand,
  mintItemsRykerRightHand,
  mintItemsRykerCap,
  mintItemsThaddeusArmor,
  mintItemsThaddeusLeftHand,
  mintItemsThaddeusRightHand,
  mintItemsThaddeusCap
};

