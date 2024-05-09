'use client'

import { useState } from 'react';
import { Button } from "@nextui-org/react";
import { ethers } from "ethers";
import {
  TimeSquadAria,
} from '../../../typechain-types';
import TimeSquadAriaABI from '../../../artifacts/contracts/parent/TimeSquadAria.sol/TimeSquadAria.json';
import ItemsAriaCapABI from '../../../artifacts/contracts/child/itemsAriaCap.sol/itemsAriaCap.json';

const MintButton = () => {
  const [isMinting, setIsMinting] = useState(false);
  const BASE_IPFS_URI = 'ipfs://Qmcq4NvF15Jf9VyEi1yDHyoAKqQdok5NdZ2PJJcwn6gW9B';  //metadata ipfs
  const mintNFT = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed!');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const timeSquadAriaAddress = '0x443a2b92bcfdcfbe64a9c34f88cdbfbb63da4610';
    const timeSquadAriaABI = TimeSquadAriaABI.abi;  // Utilizzo dell'ABI importato dal typechain
    const timeSquadAria = new ethers.Contract(timeSquadAriaAddress, timeSquadAriaABI, signer);

    // Indirizzo e ABI del contratto ItemsAriaCap
    const itemsAriaCapAddress = "0x0c6cb5e5568ef916f220f9a448ee66ae3f10f82a";
    const itemsAriaCapABI = ItemsAriaCapABI.abi;  // Utilizzo dell'ABI importato dal typechain
    const itemsAriaCap = new ethers.Contract(itemsAriaCapAddress, itemsAriaCapABI, signer); // Presumendo che TimeSquadAria e ItemsAriaCap abbiano la stessa ABI

    try {
      setIsMinting(true);
      const tx = await itemsAriaCap.nestMintWithAssets(
        timeSquadAriaAddress, // A chi inviare
        1, // destinationId del primo NFT parent
        `${BASE_IPFS_URI}/items/aria/02_cap_primary_asset.json`, // TokenURI del NFT figlio
        [1, 2] // Assets IDs
      );
      await tx.wait();
      alert('Minting successful!');
    } catch (error) {
      console.error('Minting failed:', error);
      alert('Minting failed!');
    } finally {
      setIsMinting(false);
    }
  };

  return (
    <Button disabled={isMinting} onPress={mintNFT}>
      {isMinting ? 'Minting...' : 'Mint NFT'}
    </Button>
  );
};

export default MintButton;
