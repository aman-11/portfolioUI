import { useState } from "react";
import { HeartIcon } from "@heroicons/react/solid";
import { HeartIcon as HeartIconOUtlined } from "@heroicons/react/outline";
import { client } from "../sanityClient";
import { useRecoilState } from "recoil";
import {
  toolsAtom,
  skillsAtom,
  expAtom,
  workExpAtom,
  ProjectAtom,
} from "../atoms/atomState";
import { sanityQuery } from "../constants/query";
import { motion } from "framer-motion";

//-------components-------------
import About from "../components/About";
import Header from "../components/Header";
import Tool from "../components/Tool";
import Head from "next/head";
import Skills from "../components/Skills";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function Index({
  tools,
  skills,
  experiences,
  workExp,
  projects,
}) {
  const [toolkit, setTools] = useRecoilState(toolsAtom);
  setTools(tools);

  const [skillkit, setSkills] = useRecoilState(skillsAtom);
  setSkills(skills);

  const [expkit, setExp] = useRecoilState(expAtom);
  setExp(experiences);

  const [workExpkit, setWorkExp] = useRecoilState(workExpAtom);
  setWorkExp(workExp);

  const [projectkit, setProjectKit] = useRecoilState(ProjectAtom);
  setProjectKit(projects);

  const [liked, setLiked] = useState(false);
  return (
    <div className="scroll-smooth select-none">
      <Head>Aayush</Head>
      <main className="max-w-5xl mx-5 lg:mx-auto sm:mt-4 md:mt-6">
        <Header />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 0.8,
              opacity: 0,
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 0.4,
              },
            },
          }}
        >
          <About />
          <Tool />
          <Skills />
          <div className="mt-12 flex justify-center space-x-2">
            <div className="flex-grow border-t border-gray-400"></div>
            <div className="flex -mt-3 items-center">
              <p className="text-base font-normal text-gray-500 tracking-wider">
                Hello again! Thanks for scrolling this far!!
              </p>
              {liked ? (
                <HeartIcon
                  className="btn !text-red-600"
                  onClick={() => setLiked(false)}
                />
              ) : (
                <HeartIconOUtlined
                  className="btn animate-pulse transition duration-200 ease-in-out"
                  onClick={() => setLiked(true)}
                />
              )}
            </div>
            <div className="flex-grow border-t border-gray-400"></div>
          </div>
          <Project />
          <Contact />
        </motion.div>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const tools = await client.fetch(sanityQuery.toolsQuery);
  const skills = await client.fetch(sanityQuery.skillsQuery);
  const experiences = await client.fetch(sanityQuery.expQuery);
  const workExp = await client.fetch(sanityQuery.workExpQuery);
  const projects = await client.fetch(sanityQuery.projects);
  return {
    props: {
      tools,
      skills,
      experiences,
      workExp,
      projects,
    },
    revalidate: 10,
  };
}
