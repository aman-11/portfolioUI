import { PencilAltIcon } from "@heroicons/react/outline";
import { useRecoilValue } from "recoil";
import skillsAtom from "../atoms/skillsAtoms";
import { urlFor } from "../sanityClient";

function Skills() {
  const skills = useRecoilValue(skillsAtom);

  return (
    <section className="mt-20">
      <div className="flex items-center">
        <div className="text-3xl font-bold">
          <p>Skills &</p>
          <p>Experiences</p>
        </div>
        <PencilAltIcon className="h-8 w-8 self-center mx-3 animate-pulse" />
      </div>
      <p className="text-gray-500 text-lg mt-2">The mygical power I possess:</p>

      {/* content */}
      <div className="mt-9 grid grid-cols-4">
        <div className="col-span-2 grid grid-cols-2 gap-y-10 gap-x-28 px-16 py-12 bg-gray-100 ">
          {skills?.map(({ name, desc, icon }, index) => (
            <div key={index} className="flex flex-col items-center space-y-1">
              <img
                className="objext-contain"
                src={urlFor(icon).width(48)}
                alt={name}
              />
              <div className="flex flex-col text-black items-center">
                <span className="font-semibold text-base">{name}</span>
                <p className="text-sm text-gray-500 w-[12rem]  text-center">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
