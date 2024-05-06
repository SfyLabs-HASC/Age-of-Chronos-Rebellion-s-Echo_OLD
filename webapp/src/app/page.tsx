import Image from 'next/image'
import NavBar from './navbar'
import { Button} from "@nextui-org/react";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <NavBar />
      <Button>
qui cosa metto?
      </Button>

    </main>
  )
}
