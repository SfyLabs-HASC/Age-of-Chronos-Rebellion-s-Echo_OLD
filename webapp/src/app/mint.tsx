import { useState } from 'react';
import { Button } from "@nextui-org/react";
import { ethers } from "ethers";


const MintButton = () => {
  const [isMinting, setIsMinting] = useState(false);

  const mintNFT = async () => {
    if (typeof window.ethereum === 'undefined') {
      alert('MetaMask is not installed!');
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    // Supponiamo di avere un contratto chiamato TimeSquadAria con l'indirizzo salvato in .env
    const timeSquadAriaAddress = process.env.NEXT_PUBLIC_TIMESQUAD_ARIA_ADDRESS;
    const timeSquadAriaABI = []; // Inserisci l'ABI del tuo contratto qui
    const timeSquadAria = new ethers.Contract(timeSquadAriaAddress, timeSquadAriaABI, signer);

    try {
      setIsMinting(true);
      const tx = await timeSquadAria.mintWithEquippableAsset(
        // parametri necessari qui
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
