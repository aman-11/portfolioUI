import { urlFor } from "../sanityClient";

function ToolsCard({ icon, title }) {
  return (
    // <div className="cursor-pointer self-center hover:scale-105 transform transition ease-out">
    //   <div className="relative h-80 w-80">
    <>
      <img
        className="cursor-pointer object-contain hover:scale-110 transition transform duration-200 ease-out"
        src={urlFor(icon).width(56).quality(100).url()}
        alt=""
      />
    </>
    //   </div>
    //   {/* <h3 className="text-2xl mt-3">{title}</h3> */}
    // </div>
  );
}

export default ToolsCard;
