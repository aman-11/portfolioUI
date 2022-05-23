import About from "../components/About";
import Header from "../components/Header";
import { client } from "../sanityClient";
import toolsAtom from "../atoms/toolsAtom";
import { useRecoilState } from "recoil";
import Tool from "../components/Tool";
import Head from "next/head";
import Skills from "../components/Skills";
import skillsAtom from "../atoms/skillsAtoms";

export default function Index({ tools, skills }) {
  const [toolkit, setTools] = useRecoilState(toolsAtom);
  setTools(tools);

  const [skillkit, setSkills] = useRecoilState(skillsAtom);
  setSkills(skills);

  return (
    <div className="scroll-smooth select-none">
      <Head>Aayush</Head>
      <main className="max-w-5xl mx-5 lg:mx-auto sm:mt-4 md:mt-6">
        <Header />
        <About />
        <Tool />
        <Skills />
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const toolsQuery = `*[_type == "tools"]`;
  const skillsQuery = `*[_type == "skills"]`;

  const tools = await client.fetch(toolsQuery);
  const skills = await client.fetch(skillsQuery);
  return {
    props: {
      tools,
      skills,
    },
  };
}
