import Head from "next/head";
import HomeFigma from "@/components/figma/Home";

export default function Home() {
  return (
    <div className="flex h-screen w-full flex-col">
      <Head>
        <title>IG News</title>
      </Head>
      <HomeFigma />
    </div>
  );
}
