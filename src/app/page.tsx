import Image from "next/image";
import "./page.css";

export default function Home() {
  return (
    <main className="">
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      <h1 className="text-4xl font-bold">MainFrame</h1>
      <p className="text-lg font-light">
        Welcome to MainFrame, the future of web development.
      </p>
    </main>
  );
}
