import { PencilAltIcon } from "@heroicons/react/outline";
import { useRecoilValue } from "recoil";
import { skillsAtom, expAtom, workExpAtom } from "../atoms/atomState";
import { urlFor } from "../sanityClient";

function Skills() {
  const skills = useRecoilValue(skillsAtom);
  const experiences = useRecoilValue(expAtom);
  const workExp = useRecoilValue(workExpAtom);
  console.log("skills", skills);
  return (
    <div className="mt-24" id="my skills">
      <div className="flex items-center">
        <div className="md:text-3xl text-xl font-bold">
          <p>Skills &</p>
          <p>Experiences</p>
        </div>
        <PencilAltIcon className="h-8 w-8 self-center mx-3 animate-pulse" />
      </div>
      <p className="text-gray-500 md:text-lg text-base mt-2">
        The mygical power I possess:
      </p>

      {/* content */}
      <main className="mt-9 md:grid md:grid-cols-4">
        <section className="col-span-2">
          <div className="grid grid-cols-2 gap-y-10 gap-x-28 px-16 py-12 bg-gray-100  rounded-sm">
            {skills?.map(({ name, desc, icon }, index) => (
              <div key={index} className="flex flex-col items-center space-y-1">
                <img
                  className="object-contain border rounded-full p-4 bg-white hover:scale-110 transition duration-200 ease-in-out"
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

          {/* Quote */}
          <div className="pl-7 py-9">
            <div className="text-gray-300 font-serif text-9xl">“</div>
            <blockquote className="text-gray-900 font-serif text-xl italic -mt-12 pl-6">
              You just need to have patience and{" "}
              <span className="font-semibold">Do</span>
              <span className="line-through">n't</span>
              &nbsp;
              <span className="line-through">Qu</span>
              <span className="font-semibold">it</span>!
            </blockquote>
            <div className="mt-4 text-gray-600 pl-6">- Someone</div>
          </div>
        </section>

        {/* right column for the experiences */}
        {/* 1. progess bar expeirences */}
        <section className="col-span-2 space-y-3 mx-4">
          {experiences?.map((exp, index) => (
            <div key={index} className="space-y-1">
              <span className="text-gray-800 font-semibold text-base  ">
                {exp.name}
              </span>
              <div className="overflow-hidden h-2 text-xs flex rounded-sm bg-gray-100">
                <div
                  style={{ width: `${exp.value}%; background: ${exp.color}` }}
                  className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center`}
                ></div>
              </div>
            </div>
          ))}

          {/* 2. work exp */}
          <div className="flex flex-col space-y-6 p-6">
            {workExp?.map(({ role, company, desc, date }, index) => (
              <div
                key={index}
                className="flex flex-col space-y-2 bg-gray-100 p-3  rounded-sm"
              >
                <span className="text-xl font-bold">{role}</span>
                <div className="flex flex-col font-semibold">
                  <span className="text-base text-gray-700">{company}</span>
                  <span className="text-gray-700 text-xs italic">{date}</span>
                </div>
                <p className="text-sm font-normal text-gray-500 ">{desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Skills;
