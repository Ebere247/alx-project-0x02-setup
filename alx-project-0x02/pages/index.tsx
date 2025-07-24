import Head from "next/head";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>SoloForge Home</title>
      </Head>
      <Header />
      <main className="p-6">
        <h2 className="text-xl font-semibold text-gray-700">You're Welcome </h2>
      </main>
    </>
  );
}
