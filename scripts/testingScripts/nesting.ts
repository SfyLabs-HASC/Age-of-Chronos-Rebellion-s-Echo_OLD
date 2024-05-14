import { ethers } from 'hardhat';
import {
    TimeSquadAria
} from '../../typechain-types';

async function deployContracts(): Promise<{ timeSquadAria: TimeSquadAria }> {
    const deployerAddress = (await ethers.getSigners())[0].address;
    const signers = (await ethers.getSigners());
    console.log("Deployer address: ", deployerAddress);

    const delay = (ms: number): Promise<void> => {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // Assuming TimeSquadAria has been deployed previously and we're getting its instance
    const timeSquadAria = await ethers.getContractAt("TimeSquadAria", '0x443a2b92bcfdcfbe64a9c34f88cdbfbb63da4610', signers[0]);
    await timeSquadAria.setAutoAcceptCollection('0x2de350ed8458805e1b4337b61dc5ea32c2f547b8', true);

    await delay(10000); // waiting 10 seconds

    console.log("setAutoAcceptCollection executed");

    return {
        timeSquadAria // Return the instance of the contract
    };
}

deployContracts().then(({ timeSquadAria }) => {
    console.log(`Contracts deployed: TimeSquadAria at ${timeSquadAria.address}`);
}).catch(error => {
    console.error("Failed to deploy contracts:", error);
});
