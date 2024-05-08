import Image from 'next/image'
import NavBar from './navbar'
import { Button} from "@nextui-org/react";
import MintButton from './mint';  // Assicurati che il percorso sia corretto

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <MintButton/>

    </main>
  )
}
