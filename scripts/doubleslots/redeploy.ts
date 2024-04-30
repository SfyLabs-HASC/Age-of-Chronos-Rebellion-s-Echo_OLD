import { ethers, run } from 'hardhat';
import { BigNumber } from 'ethers';
import {
    TimeSquadAria,
    NewItemsAriaArmor
} from '../../typechain-types';

import * as C from '../constants';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';

async function deployContracts(): Promise<{
    newItemsAriaArmor: NewItemsAriaArmor
    timeSquadAria: TimeSquadAria,
}> {
    const deployerAddress = (await ethers.getSigners())[0].address;
    const signers = (await ethers.getSigners());
    console.log("deployer address: ", deployerAddress);


    const newItemsAriaArmorFactory = await ethers.getContractFactory('NewItemsAriaArmor');



    const delay = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    const newItemArgsAriaArmor = [
        C.SQUAD_ITEM_METADATA_ARIA_ARMOR,
        BigNumber.from(200),
        deployerAddress,
        500
    ] as const;


    const newItemsAriaArmor = await newItemsAriaArmorFactory.deploy(...newItemArgsAriaArmor);
    await newItemsAriaArmor.deployed();



    console.log(`New Items Aria Armor deployed to ${newItemsAriaArmor.address}`);


    // Aria
    const timeSquadAria = await ethers.getContractAt("TimeSquadAria", '0x8ce12c4e792bc6b41fd5b654a8498f6428ec617b', signers[0]);
    await timeSquadAria.setAutoAcceptCollection(newItemsAriaArmor.address, true);

    await delay(10000) /// waiting 10 second.


    console.log("setAutoAcceptCollection fatto");


    return {
        timeSquadAria,
        newItemsAriaArmor
    };

}



deployContracts().then(({ timeSquadAria, newItemsAriaArmor }) => {
    console.log(`Contracts deployed: TimeSquadAria at ${timeSquadAria.address}, NewItemsAriaArmor at ${newItemsAriaArmor.address}`);
}).catch(error => {
    console.error("Failed to deploy contracts:", error);
});

