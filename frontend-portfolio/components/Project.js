import { useEffect } from "react";
import { CubeTransparentIcon } from "@heroicons/react/solid";
import { tabAtom } from "../atoms/atomTabState";
import FilterType from "./FilterType";
import { ProjectAtom } from "../atoms/atomState";
import { useRecoilState, useRecoilValue } from "recoil";
import { urlFor } from "../sanityClient";
import { TagIcon } from "@heroicons/react/solid";

function Project() {
  //   const [tabSelected, _] = useRecoilState(tabAtom);
  const projects = useRecoilValue(ProjectAtom);

  console.log("projects", projects);

  //   useEffect(() => {
  //     console.log("tabSelected", tabSelected);
  //   }, [tabSelected]);

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
        <FilterType />
      </div>

      <section className="grid grid-cols-2 mt-9 gap-10">
        {projects?.map(({ _id, title, imgUrl, description, tags }) => (
          <div
            key={_id}
            className="bg-gray-100 p-3 space-y-4 hover:scale-105 transition transform duration-200 ease-out shadow-md rounded-sm"
          >
            <span className="text-lg font-semibold">{title}</span>
            <div className="bg-white flex items-center justify-center w-full h-52">
              {imgUrl ? (
                <img
                  className="cursor-pointer object-contain"
                  src={urlFor(imgUrl).width(100).quality(100).url()}
                />
              ) : (
                <span className="cursor-pointer font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
                  {title}
                </span>
              )}
            </div>
            <p className="text-base font-normal text-black line-clamp-2 p-2">
              {description}
            </p>

            <div className="flex space-x-3 flex-wrap p-2">
              <TagIcon className="w-6 text-gray-500 font-extrabold" />
              {tags.map((tag) => (
                <span className="text-gray-500 text-base">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default Project;
