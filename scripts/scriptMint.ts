import { ethers } from 'hardhat';
import { ItemsAriaLeftHand } from '../typechain-types'; // Assicurati che il percorso sia corretto
import * as C from './constants';

async function main() {
    const signers = await ethers.getSigners();
    const deployer = signers[0];

    // Assumi che ItemsAriaLeftHand sia già distribuito e conosci il suo indirizzo
    const itemsAriaLeftHandAddress = "0xCe655997CDbD0E9662A2114A56555a5A07C3DfbE"; // Sostituisci con l'indirizzo effettivo
    const itemsAriaLeftHand = await ethers.getContractAt("ItemsAriaLeftHand", itemsAriaLeftHandAddress, deployer);
    
    // Dati per la funzione nestMintWithAssets
    const TimeSquadAriaAddress = "0x0BF95EC17E7A6b05dc127F9B8ba2B2DfAe8B05E3"; // Indirizzo del contratto principale
    const leftHandFirstAssetId = 1;
    const leftHandSecondAssetId = 2;

    try {
        let tx = await itemsAriaLeftHand.nestMintWithAssets(
            TimeSquadAriaAddress, // A chi inviare
            1, // destinationId del primo NFT parent
            `${C.BASE_IPFS_URI}/items/aria/oggetto3.json`, // TokenURI del NFT figlio
            [leftHandFirstAssetId, leftHandSecondAssetId] // Assets IDs
        );
        await tx.wait();
        console.log(`Transaction successful: ${tx.hash}`);
    } catch (error) {
        console.error('Transaction failed:', error);
    }
}

main().catch((error) => {
    console.error('Error in main execution:', error);
    process.exitCode = 1;
});
