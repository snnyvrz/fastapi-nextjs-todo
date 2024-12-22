import Image from "next/image";

export default function Home() {
  return (
    <div className="container max-w-4xl mx-auto p-4">
      <h1>Home</h1>
      <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={72} />
    </div>
  );
}
