import { useRouter } from "next/router";
import { useState } from "react";

function Header() {
  const router = useRouter();
  const [navState, _] = useState(["About", "My Skills", "Projects", "Contact"]);

  return (
    <div className="">
      <div className="flex md:justify-between justify-center text-gray-800">
        <div
          className="font-snow-flake text-lg font-semibold tracking-wider cursor-pointer"
          onClick={() => router.push("/")}
        >
          AAYUSH AMAN
        </div>

        <div className="md:flex space-x-8 hidden">
          {navState.map((nav, index) => (
            <span key={index} className="font-medium text-lg">
              {" "}
              {nav}{" "}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Header;
