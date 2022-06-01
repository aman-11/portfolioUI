import { useState, useEffect } from "react";
import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FilterType({ callbackFilterProject }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(["All", "ReactJs", "GraphQL", "Web3Js"]);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
  };

  useEffect(() => {
    callbackFilterProject(tabs[selectedIndex]);
  }, [selectedIndex]);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={handleTabChange}>
      <Tab.List className="flex space-x-9 justify-center text-base">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              classNames(
                "focus:outline-none p-2",
                selected ? "md:font-bold font-semibold  md:text-[1.2rem] text-[1.6rem]" : "filterType"
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}

export default FilterType;
