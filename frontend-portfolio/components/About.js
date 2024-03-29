import profileImg from "../assets/profile.png";
import Image from "next/image";
import Highlighter from "./Highlighter";

function About() {
  return (
    <div id="about" className="md:mt-16 mt-9">
      <div className="md:grid md:grid-cols-3 flex flex-col-reverse items-center">
        <div className="col-span-2 space-y-4 md:pr-10 mt-6">
          <p className="md:text-4xl text-2xl font-bold tracking-normal">
            Hello! I'm Aayush, a{" "}
            <Highlighter
              text="developer"
              animationDelay="1000"
              color="#FEC3BF"
              type="highlight"
            />{" "}
            based in India.
          </p>
          <div className="space-y-2 text-gray-700 text-base">
            <p>
              I love building tool that are &nbsp;
              <Highlighter
                text="user friendly, simple "
                color="#91DAB6"
                animationDelay="1500"
                type="highlight"
              />
              and &nbsp;
              <Highlighter
                text="delightful"
                animationDelay="2000"
                color="#F4E478"
                type="highlight"
              />
              .{/* </RoughNotationGroup> */}
            </p>
            <p>
              It's been 2 years, I have been working as a developer and now
              Javascript is a part of me. I have been learning fundamentals of
              &nbsp;
              <Highlighter
                text="front-end"
                color="#E6CCFD"
                animationDelay="2500"
                type="highlight"
              />
              &nbsp; and &nbsp;
              <Highlighter
                text="back-end development"
                color="#FEC3BF"
                animationDelay="3000"
                type="highlight"
              />
              . I have also attended many hackathons to understand technologies
              much more in depth with real-time use.
            </p>
            <p>
              Through these experiences I had the opportunity to work at{" "}
              <span className="impText">Infosys</span> as a{" "}
              <span className="impText">Salesforce Javascript Developer</span>.
              This helped me to develop working style that leans towards{" "}
              <Highlighter
                text="flexibility,"
                color="#FEC3BF"
                animationDelay="3500"
                type="highlight"
              />
              &nbsp;
              <Highlighter
                text="clarity"
                color="#F4E478"
                animationDelay="4500"
                type="highlight"
              />{" "}
              and &nbsp;
              <Highlighter
                text="collaboration"
                color="#91DAB6"
                animationDelay="5000"
                type="highlight"
              />
            </p>
            <p>
              I'm currently looking for a new role as a developer.&nbsp;
              <Highlighter
                text="Hire me?"
                color="#F03E2F"
                animationDelay="5500"
                type="circle"
              />
            </p>
          </div>
          <div className="pt-1">
            <a href="https://www.linkedin.com/in/aayushaman/" target="_blank">
              <button
                type="button"
                className="text-white hover:text-black hover:bg-white bg-black navBtn"
              >
                View Linkedin
              </button>
            </a>
            <a href="https://github.com/aman-11" target="_blank">
              <button
                type="button"
                className="text-gray-500 hover:text-white hover:bg-black navBtn"
              >
                View Github
              </button>
            </a>
            <br />
            <span className="font-semibold hover:text-gray-500 cursor-pointer underline underline-offset-2">
              <a href="#contact">Let’s make something special.</a>
            </span>
          </div>
        </div>
        <div className="col-span-1">
          <div className="md:p-2 w-64 md:w-auto drop-shadow-[0_21px_21px_rgba(0,0,0,0.20)] transform skew-x-[0deg] skew-y-[1deg]">
            <Image
              className="rounded-xl"
              alt="Vercel logo"
              src={profileImg}
              width={400}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
