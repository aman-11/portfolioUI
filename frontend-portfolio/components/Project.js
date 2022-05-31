import { useState } from "react";
import { CubeTransparentIcon } from "@heroicons/react/solid";
import FilterType from "./FilterType";
import { ProjectAtom } from "../atoms/atomState";
import { useRecoilValue } from "recoil";
import { urlFor } from "../sanityClient";
import { TagIcon, CodeIcon } from "@heroicons/react/solid";
import { motion } from "framer-motion";

function Project() {
  const projects = useRecoilValue(ProjectAtom);
  const [filteredProjectList, setFilteredProjectList] = useState([]);

  const filterProject = (tabName = "All") => {
    console.log("tabSelected", tabName);
    if (tabName === "All") return setFilteredProjectList(projects);

    let transformedProj = projects.filter(({ tags }) => {
      if (tags.includes(tabName)) return true;
    });
    return setFilteredProjectList(transformedProj);
  };

  return (
    <div className="mt-24">
      <div className="flex space-x-2">
        <p className="text-3xl font-bold">Projects</p>
        <CubeTransparentIcon className="h-8 w-8 self-center mx-2" />
      </div>
      <p className="text-gray-500 text-lg mt-2">
        Some of the side projects I'm currently working on:
      </p>

      <div className="mt-9">
        <FilterType callbackFilterProject={filterProject} />
      </div>

      <div className="grid grid-cols-2 mt-9 gap-10">
        {filteredProjectList?.map(
          ({
            _id,
            title,
            imgUrl,
            description,
            tags,
            codeLink,
            projectLink,
          }) => (
            <motion.div
              key={_id}
              className="bg-gray-100 p-3 flex flex-col space-y-4 shadow-md rounded-sm"
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
              <span className="text-lg font-semibold">{title}</span>
              <a href={projectLink} target="_blank">
                <div className="bg-white flex items-center justify-center w-full h-52">
                  {imgUrl ? (
                    <img
                      className="cursor-pointer object-contain hoverScale"
                      src={urlFor(imgUrl).width(100).quality(100).url()}
                    />
                  ) : (
                    <span className="cursor-pointer font-extrabold hoverScale text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                      {title}
                    </span>
                  )}
                </div>
              </a>
              <p className="text-base font-normal text-black line-clamp-2 p-2">
                {description}
              </p>

              <div className="flex space-x-3 flex-wrap p-2">
                <TagIcon className="w-6 text-gray-500 font-extrabold" />
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gray-500 text-base hover:underline hover:underline-offset-2 hover:font-semibold cursor-pointer"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <a href={codeLink} target="_blank" className="outline-none ">
                <div className="bg-white shadow-sm flex justify-center space-x-3 px-2.5 py-2 w-24 rounded-md cursor-pointer hover:bg-black hover:text-white duration-150 transition ease-out ">
                  <CodeIcon className="w-4" />
                  <span className="text-sm test-gray-500 font-semibold">
                    Code
                  </span>
                </div>
              </a>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}

export default Project;
