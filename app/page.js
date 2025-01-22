import Counter from "./components/ui/Counter";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import Image from "next/image";

export const metadata = {
  title: "The Workerrs",
  description: "A simple Next.js app",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Image src="/cabin.jpg" alt="Cabin image" width={300} height={300} />
      <Footer />
    </main>
  );
}
