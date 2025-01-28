import Image from "next/image";

export const metadata = {
  title: "The Workerrs",
  description: "A simple Next.js app",
};

export default function Home() {
  return (
    <main>
      <Image src="/cabin.jpg" alt="Cabin image" width={300} height={300} />
    </main>
  );
}
