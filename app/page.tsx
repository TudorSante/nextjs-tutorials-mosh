import Image from "next/image";
import Link from "next/link";
import ship from "@/public/images/ship.webp";

export default async function Home() {
  return (
    <main className="relative h-screen">
      {/* <Image src={ship} alt="ship" /> */}
      <Image
        src="https://bit.ly/react-cover"
        alt="React"
        fill
        className="object-cover"
        sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 33vw"
        quality={100}
        priority
      />
    </main>
  );
}
