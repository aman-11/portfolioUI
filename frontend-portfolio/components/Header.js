import { useRouter } from "next/router";
import { useState } from "react";
import {
  UserIcon,
  PencilAltIcon,
  CubeTransparentIcon,
  BriefcaseIcon,
} from "@heroicons/react/outline";

function Header() {
  const router = useRouter();
  const [navState, _] = useState(["About", "My Skills", "Projects", "Contact"]);

  return (
    <div className="py-6 ">
      <div className="flex md:justify-between justify-start text-gray-800">
        <div
          className="font-snow-flake text-lg font-semibold tracking-wider cursor-pointer"
          onClick={() => router.push("/")}
        >
          AAYUSH AMAN
        </div>

        <div className="flex md:hidden space-x-6 flex-1 justify-end">
          <a href="#about">
            <UserIcon className="w-5 hoverNavIcon" />
          </a>
          <a href="#my skills">
            <PencilAltIcon className="w-5 hoverNavIcon" />
          </a>
          <a href="#projects">
            <CubeTransparentIcon className="w-5 hoverNavIcon" />
          </a>
          <a href="#contact">
            <BriefcaseIcon className="w-5 hoverNavIcon" />
          </a>
        </div>

        <div className="md:flex space-x-8 hidden">
          {navState.map((nav, index) => (
            <a key={index} href={`#${nav.toLowerCase()}`}>
              <span className="font-medium text-lg">{nav}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
