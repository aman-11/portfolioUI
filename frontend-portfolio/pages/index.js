import About from "../components/About";
import Header from "../components/Header";
import { client } from "../sanityClient";
import toolsAtom from "../atoms/toolsAtom";
import { useRecoilState } from "recoil";
import Tool from "../components/Tool";
import Head from "next/head";

export default function Index({ tools }) {
  const [_, setTools] = useRecoilState(toolsAtom);
  setTools(tools);

  return (
    <div className="">
      <Head>Aayush</Head>
      <main className="max-w-5xl mx-5 lg:mx-auto sm:mt-4 md:mt-6">
        <Header />
        <About />
        <Tool />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const query = `*[_type == "tools"]`;
  const tools = await client.fetch(query);
  return {
    props: {
      tools,
    },
  };
}
