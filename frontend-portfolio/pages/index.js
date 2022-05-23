import About from "../components/About";
import Header from "../components/Header";
import { client } from "../sanityClient";
import { useRecoilState } from "recoil";
import {
  toolsAtom,
  skillsAtom,
  expAtom,
  workExpAtom,
} from "../atoms/atomState";
import { sanityQuery } from "../constants/query";

//-------components-------------
import Tool from "../components/Tool";
import Head from "next/head";
import Skills from "../components/Skills";

export default function Index({ tools, skills, experiences, workExp }) {
  const [toolkit, setTools] = useRecoilState(toolsAtom);
  setTools(tools);

  const [skillkit, setSkills] = useRecoilState(skillsAtom);
  setSkills(skills);

  const [expkit, setExp] = useRecoilState(expAtom);
  setExp(experiences);

  const [workExpkit, setWorkExp] = useRecoilState(workExpAtom);
  setWorkExp(workExp);

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
  const tools = await client.fetch(sanityQuery.toolsQuery);
  const skills = await client.fetch(sanityQuery.skillsQuery);
  const experiences = await client.fetch(sanityQuery.expQuery);
  const workExp = await client.fetch(sanityQuery.workExpQuery);
  return {
    props: {
      tools,
      skills,
      experiences,
      workExp,
    },
    revalidate: 10,
  };
}
