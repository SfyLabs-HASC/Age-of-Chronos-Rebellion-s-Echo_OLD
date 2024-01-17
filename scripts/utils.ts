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
  

  const squadArgs = [
    C.SQUAD_METADATA,
    BigNumber.from(100),
    deployerAddress,
    500, // 5%
  ] as const;

  const timeSquadAria: TimeSquadAria = await timeSquadCatalogAriaFactory.deploy(...squadArgs);
  await timeSquadAria.deployed();
  
  const timeSquadLuna: TimeSquadLuna = await timeSquadCatalogLunaFactory.deploy(...squadArgs);
  await timeSquadLuna.deployed();
  
  const timeSquadRyker: TimeSquadRyker = await timeSquadCatalogRykerFactory.deploy(...squadArgs);
  await timeSquadRyker.deployed();
  
  const timeSquadThaddeus: TimeSquadThaddeus = await timeSquadCatalogThaddeusFactory.deploy(...squadArgs);
  await timeSquadThaddeus.deployed();

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


  // Deployment script for Item Contracts

  const itemArgs = [
    C.SQUAD_ITEM_METADATA,
    BigNumber.from(200),
    deployerAddress,
    500, // 5%
  ] as const;

  const itemsAriaArmor = await itemsAriaArmorFactory.deploy(...itemArgs);
  await itemsAriaArmor.deployed();

  const itemsAriaCap = await itemsAriaCapFactory.deploy(...itemArgs);
  await itemsAriaCap.deployed();

  const itemsAriaLeftHand = await itemsAriaLeftHandFactory.deploy(...itemArgs);
  await itemsAriaLeftHand.deployed();

  const itemsAriaRightHand = await itemsAriaRightHandFactory.deploy(...itemArgs);
  await itemsAriaRightHand.deployed();

  const itemsLunaArmor = await itemsLunaArmorFactory.deploy(...itemArgs);
  await itemsLunaArmor.deployed();

  const itemsLunaCap = await itemsLunaCapFactory.deploy(...itemArgs);
  await itemsLunaCap.deployed();

  const itemsLunaLeftHand = await itemsLunaLeftHandFactory.deploy(...itemArgs);
  await itemsLunaLeftHand.deployed();

  const itemsLunaRightHand = await itemsLunaRightHandFactory.deploy(...itemArgs);
  await itemsLunaRightHand.deployed();

  const itemsRykerArmor = await itemsRykerArmorFactory.deploy(...itemArgs);
  await itemsRykerArmor.deployed();

  const itemsRykerCap = await itemsRykerCapFactory.deploy(...itemArgs);
  await itemsRykerCap.deployed();

  const itemsRykerLeftHand = await itemsRykerLeftHandFactory.deploy(...itemArgs);
  await itemsRykerLeftHand.deployed();

  const itemsRykerRightHand = await itemsRykerRightHandFactory.deploy(...itemArgs);
  await itemsRykerRightHand.deployed();

  const itemsThaddeusArmor = await itemsThaddeusArmorFactory.deploy(...itemArgs);
  await itemsThaddeusArmor.deployed();

  const itemsThaddeusCap = await itemsThaddeusCapFactory.deploy(...itemArgs);
  await itemsThaddeusCap.deployed();

  const itemsThaddeusLeftHand = await itemsThaddeusLeftHandFactory.deploy(...itemArgs);
  await itemsThaddeusLeftHand.deployed();

  const itemsThaddeusRightHand = await itemsThaddeusRightHandFactory.deploy(...itemArgs);
  await itemsThaddeusRightHand.deployed();

  
  // So holders do not need to accept each item
// Aria
await timeSquadAria.setAutoAcceptCollection(itemsAriaArmor.address);
await timeSquadAria.setAutoAcceptCollection(itemsAriaCap.address);
await timeSquadAria.setAutoAcceptCollection(itemsAriaLeftHand.address);
await timeSquadAria.setAutoAcceptCollection(itemsAriaRightHand.address);

// Luna
await timeSquadLuna.setAutoAcceptCollection(itemsLunaArmor.address);
await timeSquadLuna.setAutoAcceptCollection(itemsLunaCap.address);
await timeSquadLuna.setAutoAcceptCollection(itemsLunaLeftHand.address);
await timeSquadLuna.setAutoAcceptCollection(itemsLunaRightHand.address);

// Ryker
await timeSquadRyker.setAutoAcceptCollection(itemsRykerArmor.address);
await timeSquadRyker.setAutoAcceptCollection(itemsRykerCap.address);
await timeSquadRyker.setAutoAcceptCollection(itemsRykerLeftHand.address);
await timeSquadRyker.setAutoAcceptCollection(itemsRykerRightHand.address);

// Thaddeus
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusArmor.address);
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusCap.address);
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusLeftHand.address);
await timeSquadThaddeus.setAutoAcceptCollection(itemsThaddeusRightHand.address);

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
await configureCatalogAria(catalog: TimeSquadCatalogAria, itemAddress: string) {
  // Slots
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
    await Promise.all([tx1.wait()]);
  ]);
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

async function mintParentSquadRyker(timeSquadRyker: TimeSquadRyker, timeSquadCatalogRyker: string, mintTo: SignerWithAddress) {
  txRyker = await timeSquadRyker.mintWithEquippableAsset(
    mintTo.address, // To
    `${C.BASE_IPFS_URI}/timeSquad/full/0001ryker.json`, // TokenURI
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, // Equippable group
    timeSquadCatalogRyker, // Catalog address
    `${C.BASE_IPFS_URI}/timeSquad/full/0001ryker.json`, // Metadata URI, we are using the same as tokenURI. We could use a fallback one for all.
    [
      // slots part ids:
      C.SQUAD_LEFT_HAND_SLOT_PART_ID;
      C.SQUAD_RIGHT_HAND_SLOT_PART_ID;
      C.SQUAD_CAP_SLOT_PART_ID;
      C.SQUAD_ARMOR_SLOT_PART_ID;
    ],
  );
  await txRyker.wait();
}

// Per TimeSquadAria
async function mintParentSquadAria(timeSquadAria: TimeSquadAria, timeSquadCatalogAria: string, mintTo: SignerWithAddress) {
  let txAria = await timeSquadAria.mintWithEquippableAsset(
    mintTo.address, 
    `${C.BASE_IPFS_URI}/timeSquad/full/0001aria.json`, 
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
    timeSquadCatalogAria, 
    `${C.BASE_IPFS_URI}/timeSquad/full/0001aria.json`, 
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
    `${C.BASE_IPFS_URI}/timeSquad/full/0001luna.json`, 
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
    timeSquadCatalogLuna,
    `${C.BASE_IPFS_URI}/timeSquad/full/0001luna.json`, 
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
    `${C.BASE_IPFS_URI}/timeSquad/full/0001thaddeus.json`, 
    C.EQUIPPABLE_GROUP_FOR_SQUAD_DEFAULT, 
    timeSquadCatalogThaddeus,
    `${C.BASE_IPFS_URI}/timeSquad/full/0001thaddeus.json`, 
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

  tx = await items.addTwoItemAssets(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_ARMOR,
 `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`,
 `${C.BASE_IPFS_URI}/items/armor/SecondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/cap/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/lefthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/righthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/armor/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/cap/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/lefthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/righthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/armor/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/cap/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/lefthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/righthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/armor/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/cap/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/lefthand/secondAsset.json`,
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`,
    `${C.BASE_IPFS_URI}/items/righthand/secondAsset.json`,
  );
  await tx.wait();

  await items.setValidParentForEquippableGroup(
    C.EQUIPPABLE_GROUP_FOR_ITEMS_RIGHT_HAND,
    TimeSquadThaddeusAddress,
    C.SQUAD_RIGHT_HAND_SLOT_PART_ID,
  );
}


async function mintItemsAriaArmor(itemsAriaArmor: ItemsAriaArmor, TimeSquadAriaAddress: string) {
  const armorFirstAssetId = 1;
  const armorSecondAssetId = 2;

  const [deployer] = await ethers.getSigners();

  // Sending a armor NFT to the first parent squad, with 2 assets
  tx = await itemsAriaArmor.nestMintWithAssets(
    TimeSquadAriaAddress, // To
    1, // destinationId il primo nft parent
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`, // TokenURI del child nft,
    [armorFirstAssetId, armorSecondAssetId], // Assets
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`, // TokenURI of the child NFT,
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`, // TokenURI of the child NFT,
    [rightHandFirstAssetId, rightHandSecondAssetId], // Assets
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`, // TokenURI of the child NFT,
    [capFirstAssetId, capSecondAssetId], // Assets
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
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`, 
    [armorFirstAssetId, armorSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`, 
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`, 
    [rightHandFirstAssetId, rightHandSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`, 
    [capFirstAssetId, capSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`, 
    [armorFirstAssetId, armorSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`, 
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`, 
    [rightHandFirstAssetId, rightHandSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`, 
    [capFirstAssetId, capSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/armor/firstAsset.json`, 
    [armorFirstAssetId, armorSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/lefthand/firstAsset.json`, 
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
    `${C.BASE_IPFS_URI}/items/righthand/firstAsset.json`, 
    [rightHandFirstAssetId, rightHandSecondAssetId],
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
    `${C.BASE_IPFS_URI}/items/cap/firstAsset.json`, 
    [capFirstAssetId, capSecondAssetId],
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

