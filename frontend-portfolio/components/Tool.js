import { CogIcon } from "@heroicons/react/outline";
import { useRecoilValue } from "recoil";
import toolsAtom from "../atoms/toolsAtom";
import ToolsCard from "../containers/ToolsCard";

function Tool() {
  const tools = useRecoilValue(toolsAtom);

  return (
    <section className="mt-20">
      <div className="flex items-center">
        <p className="text-3xl font-bold">My ToolKit</p>
        <CogIcon className="h-8 w-8 self-center mx-2 animate-spin-slow" />
      </div>
      <p className="text-gray-500 text-lg mt-2">
        Some of the tools I love to work with:
      </p>

      {/* auto scrollbar */}
      <div className="flex overflow-x-scroll mt-9 border-gray-200 border space-x-24 p-6 scrollbar-thin scrollbar-thumb-gray-500">
        {tools?.map((tool, index) => (
          <ToolsCard icon={tool.icon} title={tool.title} key={index} />
        ))}
      </div>
    </section>
  );
}

export default Tool;
