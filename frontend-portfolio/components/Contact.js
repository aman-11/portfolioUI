import { BriefcaseIcon } from "@heroicons/react/outline";
import { HeartIcon } from "@heroicons/react/solid";

function Contact() {
  return (
    <div className="mt-24" id="contact">
      <div className="flex items-center">
        <p className="md:text-3xl text-xl font-bold">Contact Me</p>
        <BriefcaseIcon className="h-8 w-8 self-center mx-2 animate-bounce" />
      </div>
      <p className="text-gray-500 md:text-lg text-base mt-2">
        Do you have a job opportunity or idea you'd like to discuss? Feel free
        to reach me at{" "}
        <a
          href="mailto:aayushaman72@gmail.com"
          target="_blank"
          className="contactDetails animate-pulse"
        >
          aayushaman72@gmail.com
        </a>
        . You can also find me on{" "}
        <a
          href="mailto:aayushaman72@gmail.com"
          target="_blank"
          className="contactDetails"
        >
          Twitter
        </a>
        ,{" "}
        <a
          href="https://github.com/aman-11"
          target="_blank"
          className="contactDetails"
        >
          Github
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/aayushaman/"
          target="_blank"
          className="contactDetails"
        >
          Linkedin
        </a>
        .
      </p>

      <div className="border-t border-gray-400 mt-16 pb-48">
        <p className="mt-8 text-gray-500 flex font-semibold">
          Built with Sanity, Tailwind and Nextjs
          <HeartIcon className="w-5 self-center text-black mx-1" />
        </p>
      </div>
    </div>
  );
}

export default Contact;
